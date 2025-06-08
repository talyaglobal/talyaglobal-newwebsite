'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, CheckCircle, AlertCircle, Send } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')
    
    // Simulate password reset process
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success')
        setMessage('Password reset instructions have been sent to your email.')
      } else {
        setStatus('error')
        setMessage('Please enter a valid email address.')
      }
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Back to Login */}
        <Link 
          href="/vip-login" 
          className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Reset Password</h2>
            <p className="text-slate-600">Enter your email to receive reset instructions</p>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium">{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-800 font-medium">{message}</span>
            </div>
          )}

          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="email"
                    id="email"
                    required
                    className="pl-10"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Send Reset Instructions
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-slate-600">
                Check your email for password reset instructions. The link will expire in 24 hours.
              </p>
              <Link href="/vip-login" className="inline-block">
                <Button variant="outline">
                  Return to Login
                </Button>
              </Link>
            </div>
          )}

          {/* Help */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@talyaglobal.com" className="text-purple-600 hover:text-purple-700 font-medium">
                support@talyaglobal.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}