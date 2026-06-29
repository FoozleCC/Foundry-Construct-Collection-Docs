# Foundry Physics

Foundry Physics is the world-level Jolt-backed plugin that owns simulation
lifecycle, worker communication, stepping, ray/shape queries, and stats.

## Install and dependencies

1. Import the Foundry Physics addon package.
2. Add one Foundry Physics object to your project.
3. Wait for On physics ready, then initialize the world.
4. Add Foundry Physics Body or Foundry Physics Character behaviors to instances
	that need simulation.

Create the Foundry Physics object before body or character behaviors so those
behaviors can register against an active world.

## Editor properties

- Gravity X/Y/Z.
- World scale.
- Step rate (Hz).
- Max substeps.
- Automatic stepping.
- Default collider depth (2D fallback).
- Debug logging.
- Debug collider meshes.

## Actions

### World

- Initialize physics world.
- Set gravity.
- Set world scale.
- Set physics timestep.
- Enable automatic stepping.
- Step physics world.
- Pause physics.
- Resume physics.
- Set collider debug meshes.

### Queries

- Raycast.
- Shapecast.
- Clear query result.

Queries store results by key and can be consumed by expressions/triggers.

## Conditions and triggers

- Is physics initialized.
- Is physics paused.
- Is physics ready.
- On physics ready.
- On physics error.
- Query hit.
- On query result.
- On query hit.
- On query miss.

## Expressions

### World and lifecycle

- `GravityX`, `GravityY`, `GravityZ`.
- `WorldScale`, `PhysicsStepRate`.
- `ColliderDebugMeshesEnabled`.
- `LastError`.

### Query result data

- `HitCount`.
- First-hit point: `HitX`, `HitY`, `HitZ`.
- First-hit normal: `HitNormalX`, `HitNormalY`, `HitNormalZ`.
- `HitDistance`, `HitFraction`.
- `HitBodyId`, `HitBodyUID`, `HitBodyName`.
- `HitsJSON` (all hits ordered by distance).

### Stats

- `PhysicsStepMs`.
- `BodySyncMs`.
- `RaycastsThisTick`.

## Query result modes

- Closest: nearest hit.
- Any: first match found (fastest).
- All: all hits sorted nearest to farthest.

## Common workflows

1. Startup initialization:
	wait for On physics ready then initialize the world.
2. Manual stepping setup:
	disable automatic stepping and drive fixed steps yourself.
3. LOS / probe checks:
	run raycast/shapecast, then branch on query hit triggers.

## Troubleshooting

- Bodies not created: verify a Foundry Physics object exists in layout.
- No query hits: validate collision mask and ignored UID.
- Unexpected performance spikes: inspect step rate, max substeps, and debug
  stats expressions.

## Related pages

- [Foundry Physics Body](./foundry-physics-body.md)
- [Foundry Physics Character](./foundry-physics-character.md)
- [Issue Reporting](../issue-reporting.md)
