# <img class="addon-heading" src="/foundry-physics.svg" alt="Foundry Physics icon"> Foundry Physics

The Foundry Physics plugin owns the shared 3D physics world for Foundry.
It runs Jolt Physics in a web worker and exposes world setup, stepping,
queries, and diagnostics through Construct events.

## Install and dependencies

1. Import the Foundry Physics addon package.
2. Add one Foundry Physics object to your project.
3. Wait for On physics ready, then initialize the world.
4. Add Foundry Physics Body or Foundry Physics Character behaviors to instances
	that need simulation.

Create the Foundry Physics object before body or character behaviors so those
behaviors can register against an active world.

## Physics world properties

### Gravity X, Gravity Y, Gravity Z

Sets the default world gravity vector. Use this to define whether your game is
top-down, side-view, or fully 3D with custom gravity direction.

### World scale

Sets the conversion from Construct world units to physics units.
Higher values mean one physics unit spans more Construct units.

### Step rate (Hz)

Sets the fixed simulation frequency when automatic stepping is enabled.

### Max substeps

Limits how many fixed simulation steps can run in one frame to catch up after
frame drops.

### Automatic stepping

If enabled, the world steps every tick automatically.
If disabled, use Step physics world manually.

### Default collider depth (2D)

Fallback depth for auto-sized colliders on non-3D hosts.

### Debug logging

Enables runtime diagnostic logs from the plugin.

### Debug collider meshes

Draws collider mesh visualization for debugging body shapes and alignment.

## Physics conditions

### Is physics initialized

True once a physics world has been initialized.

### Is physics paused

True when simulation stepping is currently paused.

### Is physics ready

True when Jolt has finished loading and the worker is ready.

### On physics ready

Triggers when Jolt initialization succeeds.

### On physics error

Triggers when Jolt initialization fails.

### Query hit

Tests whether the stored query result key currently has at least one hit.

### On query result

Triggers when a query for a given result key has completed.

### On query hit

Triggers when a query result key completes with at least one hit.

### On query miss

Triggers when a query result key completes with no hits.

## Physics actions

### Initialize physics world

Creates world state and enables simulation after physics is ready.

### Set gravity

Changes world gravity vector at runtime.

### Set world scale

Changes conversion ratio between Construct and physics units.

### Set physics timestep

Sets step rate (Hz) and max substeps together.

### Enable automatic stepping

Toggles per-tick automatic stepping.

### Step physics world

Runs manual simulation step(s) using provided delta seconds.

### Pause physics / Resume physics

Temporarily halt and resume stepping.

### Set collider debug meshes

Toggles wireframe collider debug rendering.

### Raycast

Casts a line segment from start to end and stores result under a key.

Parameters:
- Start X/Y/Z
- End X/Y/Z
- Mode (`closest`, `any`, `all`)
- Collision mask
- Ignore UID
- Result key

### Shapecast

Sweeps a shape along a path and stores result under a key.

Parameters:
- Shape (`sphere`, `box`, `capsule`)
- Box size X/Y/Z
- Radius
- Half height
- Start X/Y/Z
- End X/Y/Z
- Align to direction
- Mode (`closest`, `any`, `all`)
- Collision mask
- Ignore UID
- Result key

### Clear query result

Clears stored result data for a result key.

## Physics expressions

### World and lifecycle

- `GravityX`, `GravityY`, `GravityZ`: current gravity vector.
- `WorldScale`: current world scale.
- `PhysicsStepRate`: current fixed step frequency.
- `ColliderDebugMeshesEnabled`: debug mesh toggle state (1/0).
- `LastError`: latest initialization/runtime error text.

### Query result data

All query expressions take a result key parameter.

- `HitCount`: number of hits.
- `HitX`, `HitY`, `HitZ`: first hit position.
- `HitNormalX`, `HitNormalY`, `HitNormalZ`: first hit normal.
- `HitDistance`: first hit distance.
- `HitFraction`: first hit fraction along cast path.
- `HitBodyId`: internal body id string.
- `HitBodyUID`: Construct UID of first hit object.
- `HitBodyName`: object type name for first hit.
- `HitsJSON`: full hit list JSON payload.

### Runtime stats

- `PhysicsStepMs`: last simulation step duration.
- `BodySyncMs`: last body sync duration.
- `RaycastsThisTick`: query count processed this tick.

## Query modes

### Closest

Returns nearest hit only.

### Any

Returns first hit found. Usually fastest mode.

### All

Returns all hits sorted from nearest to farthest.

## Typical usage

1. On start, wait for On physics ready.
2. Initialize physics world.
3. Keep automatic stepping enabled for standard gameplay.
4. Run raycast/shapecast as needed and react in On query hit/miss events.

## Scripting

When using JavaScript or TypeScript, treat this plugin as the shared world
owner for all Foundry physics behaviors and keep event-sheet and script world
settings in sync.

## Troubleshooting

- Bodies not created: verify a Foundry Physics object exists in layout.
- No query hits: validate collision mask and ignored UID.
- Unexpected performance spikes: inspect step rate, max substeps, and debug
  stats expressions.

## Related pages

- [Foundry Physics Body](./foundry-physics-body)
- [Foundry Physics Character](./foundry-physics-character)
- [Issue Reporting](../issue-reporting)
