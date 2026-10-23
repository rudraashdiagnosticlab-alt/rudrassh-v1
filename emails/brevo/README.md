# Brevo email templates

Two transactional templates for the website forms (the booking form on Contact Us and the other booking pages, and the Training Academy enquiry form). One template works for both forms: rows for fields a form doesn't have are left out.

| File | Brevo template ID | Goes to | Subject |
| --- | --- | --- | --- |
| `enquiry-notification.html` | 1 | The lab team (`contact@rudraash.com`) | `{{ params.form }} from {{ params.name }}` |
| `enquiry-confirmation.html` | 2 | The visitor (only when they gave an email) | `We've received your request – Rudraash Diagnostics & Labs` |

The website sends these from `src/lib/enquiry.ts`, which has the template IDs. It needs `BREVO_API_KEY` set on the server.

## Set up in Brevo

1. Create a new template, choose the HTML / "Code your own" editor and paste the file's contents.
2. Set the subject from the table above and a sender on your verified Brevo domain.
3. Reply-to: leave it empty on the notification template (the API call sets it to the visitor's email, so replying goes straight to them). On the confirmation template, set it to `contact@rudraash.com`.
4. Save and **activate** the template. Brevo only sends active templates. Note each template's ID for the API call.

## Params

Send these in `params`. Leave out anything the visitor didn't fill in, and the row disappears from the email.

| Param | Example | Sent by |
| --- | --- | --- |
| `form` | `Appointment request` / `Training Academy enquiry` | both forms |
| `name` | `Priya S` | both forms |
| `phone` | `9876543210` (10 digits, no +91) | both forms |
| `email` | `priya@example.com` | both forms (optional) |
| `location` | `Trichy` | both forms |
| `package` | `Diabetes Package` | booking |
| `date` | `Tue, 20 Oct 2026` (format it before sending) | booking |
| `time` | `10:30 am` | booking |
| `purpose` | `Internship` | academy |
| `message` | free text; line breaks are kept | both forms |
| `page` | `https://…/contact-us` | notification only |
| `submitted_at` | `15 Oct 2026, 4:05 pm` | notification only |

## Example API call

`POST https://api.brevo.com/v3/smtp/email` with an `api-key` header (keep the key server-side, never in browser code):

```json
{
  "templateId": 1,
  "to": [{ "email": "contact@rudraash.com", "name": "Rudraash" }],
  "replyTo": { "email": "priya@example.com", "name": "Priya S" },
  "params": {
    "form": "Appointment request",
    "name": "Priya S",
    "phone": "9876543210",
    "email": "priya@example.com",
    "location": "Trichy",
    "package": "Diabetes Package",
    "date": "Tue, 20 Oct 2026",
    "time": "10:30 am",
    "message": "Home collection please",
    "page": "https://www.rudraash.com/contact-us",
    "submitted_at": "15 Oct 2026, 4:05 pm"
  }
}
```

Leave out `replyTo` when the visitor gave no email. Send the confirmation as a second call with its own `templateId`, `to` set to the visitor, and no `replyTo`.

The lab addresses, phone numbers, hours and social links in `enquiry-confirmation.html` are copied from `src/lib/site.ts`. Update both when they change.
