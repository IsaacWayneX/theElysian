import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Google Apps Script web app URL for consultation submissions
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxd4Tp0AWKdQVOfhcPL_yy2S6Ah2skWHxWAYc_it5zLKiGIzBRhG_A3mdmgYlX9yQosRw/exec'
    
    // Create FormData for Google Apps Script
    const formData = new FormData()
    formData.append('type', 'consultation')
    formData.append('name', body.name)
    formData.append('email', body.email)
    formData.append('phone', body.phone)
    formData.append('message', body.message)
    
    // Submit to Google Apps Script from server-side
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })
    
    const responseText = await response.text()
    
    try {
      const result = JSON.parse(responseText)
      return NextResponse.json(result)
    } catch {
      // If response is not JSON, assume success
      return NextResponse.json({ 
        success: true, 
        message: 'Consultation request submitted successfully!' 
      })
    }
    
  } catch (error) {
    console.error('Server-side consultation submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit consultation request' },
      { status: 500 }
    )
  }
}
