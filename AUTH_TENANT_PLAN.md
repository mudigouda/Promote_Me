# Authentication + Multi-Tenant Foundation

This change adds the foundation for cloud multi-user workspaces:

- User accounts with hashed passwords
- Business/workspace records
- Memberships and roles
- Session cookie with signed payload
- Signup creates a business and Owner membership
- Login/logout/current-user endpoints
- Tenant-aware database relations

Production follow-ups: email verification, password reset, OAuth, 2FA, rate limiting, CSRF/origin protection, secret management, audit expansion, and security review.
