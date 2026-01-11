# EmailJS Setup Guide

## Step 1: Install EmailJS

Run in your terminal:

```bash
npm install emailjs-com
```

This is already added to `package.json`, so you can also just run:

```bash
npm install
```

## Step 2: Get Your EmailJS Keys

1. Go to **https://www.emailjs.com/**
2. Sign up for a **free account** (or log in)
3. Go to **Dashboard** → **Account**
4. Copy your **Public Key** (looks like: `YOUR_PUBLIC_KEY_HERE`)
5. Go to **Email Services** and select or create a service:
   - Add Gmail, Outlook, or another email provider
   - Copy the **Service ID** (looks like: `service_xxxxx`)
6. Go to **Email Templates**:
   - Create a **new template** or use a default one
   - Copy the **Template ID** (looks like: `template_xxxxx`)

## Step 3: Update Contact.jsx

Open `src/pages/Contact.jsx` and replace these placeholders:

```jsx
// Line 7: Replace YOUR_PUBLIC_KEY_HERE
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Line 36: Replace YOUR_SERVICE_ID_HERE and YOUR_TEMPLATE_ID_HERE
await emailjs.send(
  "YOUR_SERVICE_ID_HERE", // Your Service ID
  "YOUR_TEMPLATE_ID_HERE", // Your Template ID
  templateParams
);
```

Example:

```jsx
emailjs.init("abc123def456xyz789");

await emailjs.send(
  "service_abc123def456xyz",
  "template_xyz789abc123",
  templateParams
);
```

## Step 4: Create EmailJS Email Template

In your **EmailJS Dashboard**:

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set **Template Name** (e.g., "Portfolio Contact Form")
4. In the email body, use these **variables**:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{message}}` - Visitor's message
   - `{{to_email}}` - Your email (optional)

Example template:

```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

5. Click **Save**
6. Copy the **Template ID** and paste it in Contact.jsx

## Step 5: Test the Form

1. Run the dev server:

```bash
npm run dev
```

2. Go to http://localhost:5173
3. Scroll to **Contact** section
4. Fill in the form and click **Submit**
5. Check your email inbox for the message!

## Troubleshooting

- **"Message failed to send"**: Check Service ID, Template ID, and Public Key
- **Email not arriving**: Check spam folder or EmailJS spam filter settings
- **CORS error**: Make sure you're using the Public Key, not Private Key
- **Template variables not showing**: Verify variable names match in template and Contact.jsx

## Free Tier Limits

- EmailJS free account allows **200 emails/month**
- Perfect for a portfolio contact form
- No credit card required

## Security Note

The Public Key is safe to share (it's in frontend code anyway). Never expose your **Private Key** in frontend code.

---

Need help? Visit **https://www.emailjs.com/docs/**
