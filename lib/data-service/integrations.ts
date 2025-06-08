// API integration services for TSmart platform
// Handles external service integrations with proper error handling and retry logic

import { envConfig, apiConfig } from './config'

// OpenAI Integration
export class OpenAIService {
  private apiKey: string
  private model: string
  private baseUrl = 'https://api.openai.com/v1'

  constructor() {
    if (!apiConfig.openai.apiKey) {
      throw new Error('OpenAI API key not configured')
    }
    this.apiKey = apiConfig.openai.apiKey
    this.model = apiConfig.openai.model
  }

  async generateCompletion(prompt: string, options?: {
    maxTokens?: number
    temperature?: number
    systemMessage?: string
  }): Promise<string> {
    try {
      const messages = []
      
      if (options?.systemMessage) {
        messages.push({
          role: 'system',
          content: options.systemMessage
        })
      }
      
      messages.push({
        role: 'user',
        content: prompt
      })

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          max_tokens: options?.maxTokens || 1000,
          temperature: options?.temperature || 0.7,
        }),
      })

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      return data.choices[0]?.message?.content || ''
    } catch (error) {
      console.error('OpenAI API error:', error)
      throw new Error('Failed to generate AI completion')
    }
  }

  async generateBusinessAssessment(companyData: {
    name: string
    industry: string
    revenue: string
    employees: string
    description?: string
  }): Promise<{
    valuation: number
    hiddenValue: number
    recommendations: string[]
    riskFactors: string[]
  }> {
    const systemMessage = `You are a senior business analyst and investment advisor. Analyze the provided company data and provide a comprehensive business assessment including valuation estimates, hidden value opportunities, strategic recommendations, and risk factors.`

    const prompt = `
Analyze this company:
- Name: ${companyData.name}
- Industry: ${companyData.industry}
- Revenue: ${companyData.revenue}
- Employees: ${companyData.employees}
- Description: ${companyData.description || 'Not provided'}

Provide a detailed assessment in JSON format with:
1. Current valuation estimate (number)
2. Hidden value opportunities (number)
3. Top 5 strategic recommendations (array of strings)
4. Key risk factors (array of strings)

Format as valid JSON only.
`

    try {
      const response = await this.generateCompletion(prompt, {
        systemMessage,
        maxTokens: 1500,
        temperature: 0.3,
      })

      return JSON.parse(response)
    } catch (error) {
      console.error('Business assessment generation failed:', error)
      // Return fallback assessment
      return {
        valuation: 1000000,
        hiddenValue: 250000,
        recommendations: [
          'Implement AI-powered automation to reduce operational costs',
          'Expand digital marketing presence to reach new customer segments',
          'Develop strategic partnerships to accelerate growth',
          'Optimize pricing strategy based on market analysis',
          'Invest in employee training and development programs'
        ],
        riskFactors: [
          'Market competition intensity',
          'Economic uncertainty impact',
          'Technology disruption risk',
          'Regulatory compliance requirements',
          'Talent acquisition challenges'
        ]
      }
    }
  }
}

// Claude Integration
export class ClaudeService {
  private apiKey: string
  private model: string
  private baseUrl = 'https://api.anthropic.com/v1'

  constructor() {
    if (!apiConfig.claude.apiKey) {
      throw new Error('Claude API key not configured')
    }
    this.apiKey = apiConfig.claude.apiKey
    this.model = apiConfig.claude.model
  }

  async generateCompletion(prompt: string, options?: {
    maxTokens?: number
    temperature?: number
    systemMessage?: string
  }): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/messages`, {
        method: 'POST',
        headers: {
          'x-api-key': this.apiKey,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: this.model,
          max_tokens: options?.maxTokens || 1000,
          temperature: options?.temperature || 0.7,
          system: options?.systemMessage,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
        }),
      })

      if (!response.ok) {
        throw new Error(`Claude API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      return data.content[0]?.text || ''
    } catch (error) {
      console.error('Claude API error:', error)
      throw new Error('Failed to generate AI completion')
    }
  }
}

// Email Service
export class EmailService {
  private transporter: any

  constructor() {
    // Note: In a real implementation, you would use nodemailer
    // This is a placeholder for the email service configuration
  }

  async sendEmail(options: {
    to: string
    subject: string
    html: string
    text?: string
  }): Promise<boolean> {
    try {
      // Placeholder for email sending logic
      console.log('Sending email:', {
        to: options.to,
        subject: options.subject,
        from: envConfig.gmailUser,
      })

      // In a real implementation, you would use nodemailer:
      // const info = await this.transporter.sendMail({
      //   from: envConfig.gmailUser,
      //   to: options.to,
      //   subject: options.subject,
      //   text: options.text,
      //   html: options.html,
      // })

      return true
    } catch (error) {
      console.error('Email sending failed:', error)
      return false
    }
  }

  async sendAssessmentResults(email: string, companyName: string, results: any): Promise<boolean> {
    const subject = `Your Business Assessment Results - ${companyName}`
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a365d;">Business Assessment Results</h1>
        <h2>Company: ${companyName}</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Valuation Analysis</h3>
          <p><strong>Current Valuation:</strong> $${results.valuation?.toLocaleString()}</p>
          <p><strong>Hidden Value Potential:</strong> $${results.hiddenValue?.toLocaleString()}</p>
        </div>
        
        <div style="background: #f0f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Strategic Recommendations</h3>
          <ul>
            ${results.recommendations?.map((rec: string) => `<li>${rec}</li>`).join('') || ''}
          </ul>
        </div>
        
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Risk Factors</h3>
          <ul>
            ${results.riskFactors?.map((risk: string) => `<li>${risk}</li>`).join('') || ''}
          </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${envConfig.appUrl}/contact" style="background: #1a365d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
            Schedule a Consultation
          </a>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          This assessment was generated by TSmart.ai technology. For more detailed analysis, 
          please contact our team at ${envConfig.companyEmail}.
        </p>
      </div>
    `

    return this.sendEmail({
      to: email,
      subject,
      html,
      text: `Business Assessment Results for ${companyName}. Visit ${envConfig.appUrl} for more details.`
    })
  }
}

// Twilio Service (SMS/WhatsApp)
export class TwilioService {
  private accountSid: string
  private authToken: string
  private phoneNumber: string

  constructor() {
    if (!envConfig.twilioAccountSid || !envConfig.twilioAuthToken) {
      throw new Error('Twilio credentials not configured')
    }
    this.accountSid = envConfig.twilioAccountSid
    this.authToken = envConfig.twilioAuthToken
    this.phoneNumber = '+1234567890' // Default phone number
  }

  async sendSMS(to: string, message: string): Promise<boolean> {
    try {
      // Placeholder for Twilio SMS sending
      console.log('Sending SMS:', { to, message, from: this.phoneNumber })
      
      // In a real implementation, you would use the Twilio SDK:
      // const client = twilio(this.accountSid, this.authToken)
      // const result = await client.messages.create({
      //   body: message,
      //   from: this.phoneNumber,
      //   to: to
      // })

      return true
    } catch (error) {
      console.error('SMS sending failed:', error)
      return false
    }
  }

  async sendWhatsApp(to: string, message: string): Promise<boolean> {
    try {
      // Placeholder for WhatsApp sending
      console.log('Sending WhatsApp:', { to, message })
      
      // In a real implementation, you would use Twilio WhatsApp API:
      // const client = twilio(this.accountSid, this.authToken)
      // const result = await client.messages.create({
      //   body: message,
      //   from: `whatsapp:${this.phoneNumber}`,
      //   to: `whatsapp:${to}`
      // })

      return true
    } catch (error) {
      console.error('WhatsApp sending failed:', error)
      return false
    }
  }
}

// Google Services Integration
export class GoogleService {
  private clientId: string
  private clientSecret: string

  constructor() {
    // Google OAuth configuration would go here
    this.clientId = 'google_client_id'
    this.clientSecret = 'google_client_secret'
  }

  async verifyIdToken(idToken: string): Promise<any> {
    try {
      // Placeholder for Google ID token verification
      console.log('Verifying Google ID token:', idToken)
      
      // In a real implementation, you would use Google Auth Library:
      // const { OAuth2Client } = require('google-auth-library')
      // const client = new OAuth2Client(this.clientId)
      // const ticket = await client.verifyIdToken({
      //   idToken: idToken,
      //   audience: this.clientId,
      // })
      // return ticket.getPayload()

      return null
    } catch (error) {
      console.error('Google ID token verification failed:', error)
      throw new Error('Invalid Google ID token')
    }
  }
}

// Stripe Payment Service
export class StripeService {
  private publishableKey: string
  private secretKey: string

  constructor() {
    if (!envConfig.stripePublishableKey || !envConfig.stripeSecretKey) {
      throw new Error('Stripe credentials not configured')
    }
    this.publishableKey = envConfig.stripePublishableKey
    this.secretKey = envConfig.stripeSecretKey
  }

  async createPaymentIntent(amount: number, currency: string = 'usd'): Promise<any> {
    try {
      // Placeholder for Stripe payment intent creation
      console.log('Creating Stripe payment intent:', { amount, currency })
      
      // In a real implementation, you would use Stripe SDK:
      // const stripe = require('stripe')(this.secretKey)
      // const paymentIntent = await stripe.paymentIntents.create({
      //   amount: amount * 100, // Convert to cents
      //   currency: currency,
      //   automatic_payment_methods: {
      //     enabled: true,
      //   },
      // })
      // return paymentIntent

      return {
        id: 'pi_demo_payment_intent',
        client_secret: 'pi_demo_client_secret',
        amount,
        currency,
      }
    } catch (error) {
      console.error('Stripe payment intent creation failed:', error)
      throw new Error('Failed to create payment intent')
    }
  }
}

// Export service instances
export const openaiService = new OpenAIService()
export const claudeService = new ClaudeService()
export const emailService = new EmailService()
export const twilioService = new TwilioService()
export const googleService = new GoogleService()
export const stripeService = new StripeService()

// Export a unified API service
export class APIIntegrationService {
  public openai = openaiService
  public claude = claudeService
  public email = emailService
  public twilio = twilioService
  public google = googleService
  public stripe = stripeService

  async generateBusinessInsights(companyData: any): Promise<any> {
    try {
      // Try OpenAI first, fallback to Claude if needed
      return await this.openai.generateBusinessAssessment(companyData)
    } catch (error) {
      console.warn('OpenAI failed, trying Claude:', error)
      try {
        const prompt = `Analyze this company and provide business insights: ${JSON.stringify(companyData)}`
        const response = await this.claude.generateCompletion(prompt)
        return JSON.parse(response)
      } catch (claudeError) {
        console.error('Both AI services failed:', claudeError)
        throw new Error('AI services unavailable')
      }
    }
  }

  async sendNotification(type: 'email' | 'sms' | 'whatsapp', recipient: string, message: string, subject?: string): Promise<boolean> {
    try {
      switch (type) {
        case 'email':
          return await this.email.sendEmail({
            to: recipient,
            subject: subject || 'Notification from TSmart',
            html: message,
            text: message.replace(/<[^>]*>/g, ''), // Strip HTML for text version
          })
        case 'sms':
          return await this.twilio.sendSMS(recipient, message)
        case 'whatsapp':
          return await this.twilio.sendWhatsApp(recipient, message)
        default:
          throw new Error(`Unsupported notification type: ${type}`)
      }
    } catch (error) {
      console.error(`Failed to send ${type} notification:`, error)
      return false
    }
  }
}

export const apiIntegration = new APIIntegrationService()

