# Documents — Next Implementation

## Phase 1 — Upload
- Add multipart upload endpoint.
- Validate MIME type and maximum size.
- Store files outside Git history using S3/R2/local storage adapter.
- Save only metadata and storage key in PostgreSQL.
- Generate short-lived signed download URLs.

## Phase 2 — CRM attachments
- Attach documents to Contact, Company, Deal, Campaign and Conversation.
- Add document list to Customer 360.
- Support categories: contract, invoice, quotation, ID, media, other.

## Phase 3 — Admin UI
- Drag-and-drop upload.
- Mobile camera/file picker support.
- Preview PDF/images where supported.
- Search, filter, sort and archive.

## Phase 4 — Security
- Enforce business isolation and role permissions.
- Never expose storage credentials to the browser.
- Audit upload/download/archive events.
- Add retention and deletion controls.

## Phase 5 — Production
- Virus-scan hook.
- Upload/download rate limits.
- Background processing for large files.
- Automated tests and CI.
