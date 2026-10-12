# Prepenroll Question Intelligence Agent — Phase 1

Status: **foundation only, non-live**. This directory is additive. It does not alter the current student-facing Practice Hub or publish questions.

## Architecture
- Current GitHub Pages Practice Hub remains unchanged.
- Separate authenticated Admin Question Studio (future deployment) calls a protected API.
- API generates original IB Physics HL/SL questions, verifies them, stores drafts and audit history in PostgreSQL.
- Publication adapter maps APPROVED records to the **existing** practice bank's verified import format; opening a GitHub PR is the final staging step.
- No direct AI write permission to `main`. Human review and protected checks are required.
- API keys and identity claims must stay server-side, never in GitHub Pages JavaScript.

## Phase 1 acceptance criteria
1. Create draft questions from topic, subtopic, HL/SL, type, difficulty and count (maximum 20 per request).
2. Every draft has answer, worked solution, mark scheme, provenance, syllabus version, and a stable identifier.
3. Validate schema, physics and unit checks, syllabus applicability and duplicates. Automated verification is advisory: flag uncertain content for human review.
4. Roles: Super Admin and delegated Reviewer only. Generate/review/publish events are auditable.
5. Review actions: Approve, Reject, Regenerate, Edit; changed questions require reapproval.
6. Only approved and unchanged version hashes may proceed to export and a GitHub draft PR.
7. Block publishing until the live IB bank format and loader paths are inspected and mapped; never replace existing bank wholesale.
8. Regression tests confirm zero changes to student pages, routes, CSS, existing counts, and question IDs.

## Initial operational sequence
Generated -> Validation Pending -> Needs Review -> Approved -> Export Verified -> Publication PR -> Published.
Rejected and Needs Fix are terminal/hold states for that revision. Regenerated/edited content becomes a new revision needing fresh approval.

## Planned endpoints (authenticated API, not yet implemented)
- POST /api/generation-batches
- GET /api/questions?status=pending
- PATCH /api/questions/{id}
- POST /api/questions/{id}/approve
- POST /api/questions/{id}/reject
- POST /api/questions/{id}/regenerate
- POST /api/publication-batches (only approved pinned revisions)
- GET /api/audit-events

## Integration safety
GitHub Pages is public; a hidden /admin page alone is not authentication. Host the Studio on an authenticated service (e.g. admin.practice.prepenroll.com) and link it only for authenticated admins. Secrets are never committed. Existing static interface and data remain exactly as-is.

## Next engineering work
1. Inventory real IB HL and SL loader paths, question format, and existing IDs.
2. Implement protected API and database schema/migrations.
3. Implement generator and dual-pass verifier with deterministic checks.
4. Implement secure review UI and versioned approval.
5. Implement read-only dry-run adapter, then PR-based publishing with staging/regression test.
