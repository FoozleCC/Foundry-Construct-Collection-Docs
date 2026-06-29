# Foundry Physics Body

Foundry Physics Body is the per-instance rigid-body behavior that creates and
manages Jolt bodies through the Foundry Physics world plugin.

## Install and dependency

1. Import the Foundry Physics Body addon package.
2. Ensure one Foundry Physics world object exists in the project.
3. Add Foundry Physics Body behavior to relevant objects.

Without a Foundry Physics world object, body creation fails.

## Core capabilities

- Static, dynamic, and kinematic body types.
- Multiple collider shapes with source/override sizing controls.
- Force, impulse, torque, and angular impulse application.
- Material tuning: mass, friction, restitution, damping, gravity scale, density.
- Collision filtering via 8-bit layer/mask.
- Collision triggers including object-parameter variants.

## Collider shapes

Supported shapes:

- Box
- Sphere
- Capsule
- Cylinder
- Tapered capsule
- Tapered cylinder
- Convex hull
- Triangle mesh (static only)
- Plane (static only)
- Height field (static only)

If host geometry for the selected shape is unavailable, runtime falls back to a
safe shape and logs a warning.

## Key editor properties

- Enabled on start.
- Body type.
- Collider shape and source.
- Override size/offset/scale and manual values.
- Tapered shape radius scales.
- Height field resolution.
- Mesh flip axis.
- Collision layer and mask.
- Is trigger.
- Material and physical parameters.
- Rotation locks.

## Actions

### Setup and lifecycle

- Create body.
- Destroy body.
- Set enabled.
- Set body type.
- Set collider shape.
- Set collider size/size axes.
- Set collider offset.
- Set auto-size from bounds.
- Set auto-resize with instance scale.
- Sync from instance bounds.

### Transform and velocity

- Set sync mode (`physics-to-object`, `object-to-physics`, `manual`).
- Set body position.
- Set linear velocity.
- Set angular velocity.
- Set rotation locks.

### Forces

- Apply impulse.
- Apply force.
- Apply force at point.
- Apply impulse at point.
- Apply force toward position.
- Apply impulse toward position.
- Apply torque.
- Apply angular impulse.

### Material

- Set mass.
- Set friction.
- Set restitution.
- Set linear damping.
- Set angular damping.
- Set gravity scale.
- Set density.
- Set treat as bullet.

### Collision filtering

- Set collision layer.
- Set collision mask.
- Enable/disable layer bit.
- Enable/disable mask bit.

## Conditions and triggers

- Has body.
- Is enabled.
- Is static / dynamic / kinematic.
- Is treated as bullet.
- Is layer enabled.
- Is mask enabled.
- On collision begin.
- On collision end.
- On collision with object.
- On collision ended with object.

## Expressions

### Identity and shape

- `BodyId`, `BodyType`, `ColliderShape`, `HasBody`.
- `ColliderSizeX/Y/Z`, `ColliderOffsetX/Y/Z`.

### Collision context

- `CollidingBodyId`.
- `CollidingUID`.

### Transform and velocity

- `SyncMode`.
- `BodyX`, `BodyY`, `BodyZ`.
- `VelX`, `VelY`, `VelZ`.
- `AngVelX`, `AngVelY`, `AngVelZ`.
- `Speed`, `AngularSpeed`.

### Material and mass properties

- `Mass`, `Friction`, `Restitution`.
- `LinearDamping`, `AngularDamping`.
- `GravityScale`, `Density`.
- `MassCenterX/Y/Z`.
- `InertiaAroundX/Y/Z`.

### Filtering and diagnostics

- `CollisionLayer`, `CollisionMask`.
- `RotationLockedX/Y/Z`.
- `LastError`.

## Filtering rule

Two bodies collide only if both checks pass:

1. bodyA layer intersects bodyB mask
2. bodyB layer intersects bodyA mask

## Common workflows

1. Dynamic prop:
	set body type dynamic, set collider shape, tune mass and damping.
2. Trigger volume:
	set Is trigger true and react via collision begin/end triggers.
3. Projectile body:
	enable bullet treatment and use impulse toward target position.

## Troubleshooting

- Body not simulating: verify sync mode and body type are appropriate.
- Wrong collider size: check source mode and size override flags.
- Missing collisions: inspect both layer and mask settings.
- No collision callbacks: ensure body exists and behavior is enabled.

## Related pages

- [Foundry Physics](./foundry-physics.md)
- [Foundry Physics Character](./foundry-physics-character.md)
- [Issue Reporting](../issue-reporting.md)
