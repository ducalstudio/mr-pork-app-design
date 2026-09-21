# `handoff.json` schema

`schema.json` (JSON Schema, draft 2020-12) is the machine-readable contract. This file explains it for people.
Any JSON Schema validator can check a `handoff.json` against it with no custom code.

A `handoff.json` lives beside a prototype (`prototypes/<module>/<SCREEN-ID>/handoff.json`). It exists **only for Approved and Master versions** (`versionType`), matching the Explorer's `HANDOFF_TYPES`. A Reference or Draft never produces valid handoff data, and a Reference is never a handoff source.

## Fields (all arrays may be empty, all top-level fields are required)

| Field | Meaning |
|---|---|
| `schemaVersion` | Always `1` for this schema. |
| `screenId` | Product Screen ID, or `To Verify`. |
| `versionType` | `approved` or `master`. |
| `components` | Ids from `prototypes/_components/`, so reuse is traceable. |
| `states` | `{ id, name, file? }`, matching the files in the prototype's `states/` folder. |
| `interactions` | `{ trigger, result, targetState?, marker? }`. |
| `responsive` | `{ tier, note }` per prototype tier (`compact`, `medium`, `expanded`). Design intent only. |
| `data` | Data the screen needs: `{ name, detail?, marker? }`. |
| `api` | API dependencies, same shape. Unknown → marker `Backend Dependency Unknown`. |
| `cms` | CMS dependencies, same shape. Unknown → marker `CMS Rule Required`. |
| `rules` | Business rules, same shape. Never invented: unknown → marker `Open Question`. |
| `notes` | Programmer notes (strings). |
| `acceptance` | Acceptance criteria (strings). |

## Markers

`marker` is one of `To Verify`, `Open Question`, `CMS Rule Required`, `Backend Dependency Unknown`. It keeps unknowns visible instead of empty. An item without a marker is a confirmed, owner-approved fact.

## Strictness

Every object has `additionalProperties: false`, so a typo in a property name fails validation instead of passing silently.

## Tiers are not a production contract

`responsive[].tier` uses the prototype / design-system tiers. They describe design intent per tier; programmers may implement the behaviour with their own breakpoints. The three tier names appear in `schema.json` because JSON cannot import `prototype-runtime/tiers.js`; the numeric thresholds are **not** duplicated. The Phase A self-test checks that the schema's tier names equal `MPTiers.names`.

## Validating

Validate with any JSON Schema (2020-12) validator, for example `ajv`. A project validation command is outside Phase A. `_selftest/handoff.json` is a neutral fixture that must validate.
