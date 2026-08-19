# Promote_Me Implementation Flows

The application is built as an end-to-end growth workflow. Implement modules in this order without requiring product re-approval between steps.

## 1. Lead capture
Business Finder / CSV import / web forms -> deduplicate -> company + contact + lead -> source + consent -> assign owner -> follow-up task.

## 2. Lead qualification
Lead -> score -> qualify -> segment -> create deal when sales opportunity exists.

## 3. Campaign
Audience -> consent check -> AI draft -> human approval -> channel-specific rendering -> schedule -> queue -> provider -> webhook delivery metrics.

## 4. Conversation
Inbound message -> identify contact -> conversation -> AI intent -> answer or human handoff -> activity log.

## 5. Sales conversion
Interested contact -> lead -> call/task -> deal -> pipeline stage -> won/lost -> revenue attribution.

## 6. Retention
Won deal/customer -> segment -> follow-up automation -> campaign -> engagement -> repeat purchase/renewal.

## 7. Analytics
Campaign + message + conversation + deal + payment events -> attribution -> dashboard -> ROI and next-best-action suggestions.

## Safety and compliance
All outbound workflows must enforce channel/provider rules, consent and opt-out/suppression status, rate limits, audit logs, and explicit approval for high-impact actions. Business Finder should use permitted public/licensed sources and retain source metadata.
