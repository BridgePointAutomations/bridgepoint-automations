import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AssessmentResultsRequest {
  email: string;
  score: number;
  readinessLevel: string;
  readinessDescription: string;
  sectionScores: Record<number, number>;
  answers: Array<{ question: string; answer: string }>;
  recommendations: string[];
  pdfBase64: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      email,
      score,
      readinessLevel,
      readinessDescription,
      sectionScores,
      recommendations,
      pdfBase64,
    }: AssessmentResultsRequest = await req.json();

    console.log(`Sending assessment results to ${email}, score: ${score}`);

    // Decode PDF from base64
    const pdfBuffer = Uint8Array.from(atob(pdfBase64), (c) => c.charCodeAt(0));

    // Determine color based on readiness level
    const getColorForLevel = (level: string): string => {
      if (level.includes("High")) return "#0FA896";
      if (level.includes("Moderate")) return "#0CA5C9";
      if (level.includes("Low")) return "#FF9800";
      return "#6B7280";
    };

    const levelColor = getColorForLevel(readinessLevel);

    // Build HTML email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #058284 0%, #0FA896 100%);
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
    }
    .content {
      padding: 40px 30px;
    }
    .score-box {
      background-color: #f8f9fa;
      border-left: 4px solid ${levelColor};
      padding: 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .score-box h2 {
      margin: 0 0 10px 0;
      color: ${levelColor};
      font-size: 24px;
    }
    .score-box p {
      margin: 5px 0;
      color: #666;
    }
    .score-number {
      font-size: 36px;
      font-weight: bold;
      color: #058284;
      margin: 10px 0;
    }
    .section-scores {
      margin: 20px 0;
    }
    .section-score-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .recommendations {
      background-color: #f0fdf4;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    .recommendations h3 {
      color: #058284;
      margin-top: 0;
    }
    .recommendations ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .recommendations li {
      margin: 8px 0;
      color: #333;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #058284 0%, #0FA896 100%);
      color: #ffffff !important;
      padding: 16px 32px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin: 20px 0;
      text-align: center;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 30px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
    .footer a {
      color: #058284;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 Your Automation Readiness Assessment Results</h1>
    </div>
    
    <div class="content">
      <p>Hello!</p>
      
      <p>Thank you for completing the Automation Readiness Assessment. We've analyzed your responses and prepared a comprehensive report for you.</p>
      
      <div class="score-box">
        <h2>${readinessLevel}</h2>
        <p>${readinessDescription}</p>
        <div class="score-number">${score} / 30 Points</div>
      </div>

      <div class="section-scores">
        <h3>Section Breakdown:</h3>
        <div class="section-score-item">
          <span>Process Readiness</span>
          <strong>${sectionScores[1]} / 10</strong>
        </div>
        <div class="section-score-item">
          <span>Organizational Readiness</span>
          <strong>${sectionScores[2]} / 10</strong>
        </div>
        <div class="section-score-item">
          <span>Technical Readiness</span>
          <strong>${sectionScores[3]} / 10</strong>
        </div>
      </div>

      <div class="recommendations">
        <h3>Recommended Next Steps</h3>
        <ul>
          ${recommendations.map((rec) => `<li>${rec}</li>`).join("")}
        </ul>
      </div>

      <p style="text-align: center;">
        <a href="https://bridgepointconsulting.com/booking" class="cta-button">
          Book Your Free Consultation →
        </a>
      </p>

      <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
        <strong>What's Next?</strong><br>
        Review your detailed PDF report attached to this email, then schedule a free consultation with our team to discuss your automation strategy.
      </p>
    </div>

    <div class="footer">
      <p><strong>BridgePoint Consulting</strong></p>
      <p>Empowering businesses through intelligent automation</p>
      <p>
        <a href="https://bridgepointconsulting.com">Visit our website</a> | 
        <a href="https://bridgepointconsulting.com/resources">Read our blog</a>
      </p>
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        This email was sent because you completed an assessment on our website.<br>
        If you have any questions, please contact us through our website.
      </p>
    </div>
  </div>
</body>
</html>
    `;

    const emailResponse = await resend.emails.send({
      from: "BridgePoint Consulting <onboarding@resend.dev>",
      to: [email],
      subject: `Your Automation Readiness Results: ${readinessLevel}`,
      html: htmlContent,
      attachments: [
        {
          filename: `BridgePoint-Assessment-Results.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-assessment-results function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
