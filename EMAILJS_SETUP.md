# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Add Email Service

1. Go to the EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

### Subject Line:

```
New Contact Form Message: {{subject}}
```

### Email Body:

```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

---
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
---

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** (e.g., `abcdefghijk123456`)

## Step 5: Update Environment Variables

Create a `.env` file in the project root or update the existing one with your credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijk123456
```

**Important:**

- The `.env` file is already configured for you with the current credentials
- Use `VITE_` prefix for Vite to expose the variables to the client
- Never commit sensitive credentials to version control

## Template Variables Used

The following variables are sent from the contact form:

- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (hardcoded as "Fatjon Gashi")

## Security Notes

- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
- Environment variables with `VITE_` prefix are exposed to the client
- Free tier includes 200 emails/month
- Consider upgrading for higher volume
- Add `.env` to `.gitignore` if not already present
- Use `.env.example` for sharing configuration structure

## Testing

1. After setting up, test the contact form
2. Check your email for incoming messages
3. Verify the template formatting looks correct

## Troubleshooting

- Make sure all IDs are correctly copied
- Check EmailJS dashboard for any service issues
- Ensure your email service is properly configured
- Check browser console for any error messages
