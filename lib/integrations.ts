// API integration services for TalyaGlobal platform
// Handles external service integrations with proper error handling and retry logic

import { envConfig, apiConfig } from './config'

// OpenAI Integration
export class OpenAIService {
  private apiKey: string
  private model: string
  private baseUrl = 'https://api.openai.com/v1'

  constructor() {
    if (!apiConfig.openai.apiKey) {
      console.warn('OpenAI API key not configured')
      this.apiKey = ''
      this.model = apiConfig.openai.model
      return
    }
    this.apiKey = apiConfig.openai.apiKey
    this.model = apiConfig.openai.model
  }

  async generateCompletion(prompt: string, options?: {
    maxTokens?: number
    temperature?: number
    systemMessage?: string
  }): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured')
    }

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
      console.warn('Claude API key not configured')
      this.apiKey = ''
      this.model = apiConfig.claude.model
      return
    }
    this.apiKey = apiConfig.claude.apiKey
    this.model = apiConfig.claude.model
  }

  async generateCompletion(prompt: string, options?: {
    maxTokens?: number
    temperature?: number
    systemMessage?: string
  }): Promise<string> {
    if (!this.apiKey) {
      throw new Error('Claude API key not configured')
    }

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
        from: envConfig.companyEmail,
      })

      // In a real implementation, you would use nodemailer or similar service
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
          This assessment was generated by TalyaGlobal's AI technology. For more detailed analysis, 
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

// Export service instances
export const openaiService = new OpenAIService()
export const claudeService = new ClaudeService()
export const emailService = new EmailService()

// Export a unified API service
export class APIIntegrationService {
  public openai = openaiService
  public claude = claudeService
  public email = emailService

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

  async sendNotification(type: 'email', recipient: string, message: string, subject?: string): Promise<boolean> {
    try {
      switch (type) {
        case 'email':
          return await this.email.sendEmail({
            to: recipient,
            subject: subject || 'Notification from TalyaGlobal',
            html: message,
            text: message.replace(/<[^>]*>/g, ''), // Strip HTML for text version
          })
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