import { NextResponse } from 'next/server';
import { apiService } from '@/app/services/services';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    // Fetch company data by ID
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch company' },
      { status: 404 }
    );
  }
}
