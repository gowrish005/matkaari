# EmailJS Setup Guide for Matkaari Franchise Form

## 📧 EmailJS - Free Email Service Setup

EmailJS allows you to send emails directly from your frontend without a backend server.
**Free Plan:** 200 emails per month

---

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create an account using Google or Email

---

## Step 2: Add Email Service

1. After login, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended for personal use)
   - **Outlook/Office365**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection steps:
   - For Gmail: Allow access to your Gmail account
   - Name your service (e.g., "Matkaari Franchise")
5. Click **"Create Service"**
6. **Copy the Service ID** (e.g., `service_abc123`)

---

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

### Template Content:

**Subject:**
```
New Franchise Inquiry from {{from_name}}
```

**Body:**
```html
<h2>New Franchise Consultation Request</h2>

<p><strong>Applicant Details:</strong></p>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Phone:</strong> {{contact_number}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Preferred City:</strong> {{preferred_city}}</li>
  <li><strong>Budget Range:</strong> {{budget}}</li>
</ul>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the Matkaari franchise inquiry form.</em></p>
```

4. Set **"To Email"** to your business email (e.g., `franchise@matkaari.com` or `rahul@matkaari.com`)
5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz789`)

---

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (it looks like: `abcd1234EFGH5678`)
3. **Copy the Public Key**

---

## Step 5: Update Your Code

Open `src/components/FranchiseForm.jsx` and replace these values (around line 28-30):

```javascript
const serviceId = 'service_matkaari' // Replace with YOUR Service ID
const templateId = 'template_franchise' // Replace with YOUR Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with YOUR Public Key
```

### Example:
```javascript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'abcd1234EFGH5678'
```

---

## Step 6: Test Your Form

1. Run your development server:
   ```bash
   cd MainWeb
   npm run dev
   ```

2. Fill out the franchise form on your website
3. Submit the form
4. Check your email inbox for the franchise inquiry

---

## 🎯 Receiving Emails To

By default, emails will be sent to the email address you specified in the EmailJS template.

**To change the receiving email:**
1. Go to EmailJS Dashboard → Email Templates
2. Edit your template
3. Change the **"To Email"** field

**To receive at multiple emails:**
- Add multiple emails separated by commas: `email1@example.com, email2@example.com`

---

## 🔧 Troubleshooting

### Form submits but no email received:
1. Check your spam/junk folder
2. Verify Service ID, Template ID, and Public Key are correct
3. Check EmailJS dashboard → "Logs" for errors
4. Make sure your email service is connected properly

### "Failed to send" error:
1. Check browser console for specific error
2. Verify all three keys (Service, Template, Public) are correct
3. Check EmailJS monthly quota (200 emails free)

### Gmail blocking emails:
1. Check Gmail "Less secure app access" settings
2. Use App Password if 2FA is enabled

---

## 📱 Email Notifications

You can also set up:
- **Auto-reply to customers**: Create a second template to send confirmation to the customer
- **SMS notifications**: Integrate with Twilio (additional service)
- **Slack notifications**: Use EmailJS webhook

---

## 💰 Pricing (If you need more emails)

- **Free**: 200 emails/month
- **Basic**: $7/month - 1,000 emails
- **Pro**: $15/month - 10,000 emails

---

## 📞 Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Tutorial Videos: https://www.emailjs.com/docs/tutorial/overview/

---

## ✅ Quick Checklist

- [ ] Create EmailJS account
- [ ] Connect email service (Gmail/Outlook)
- [ ] Create email template
- [ ] Copy Service ID, Template ID, and Public Key
- [ ] Update FranchiseForm.jsx with your keys
- [ ] Test the form
- [ ] Check email received successfully

---

**Note:** Keep your Public Key safe but remember it's meant to be used in frontend code. Never share your Private Key (if you have one).
