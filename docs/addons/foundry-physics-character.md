# Foundry Physics Character

Foundry Physics Character is a kinematic character-controller behavior built on
Jolt CharacterVirtual through the Foundry Physics world plugin.

## Install and dependency

1. Import the Foundry Physics Character addon package.
2. Ensure one Foundry Physics object exists in the project.
3. Add the behavior to your player or NPC object.

Do not use Foundry Physics Body on the same instance as this behavior.

## Core capabilities

- Collide-and-slide movement.
- Grounding and slope/stair handling.
- Jump pipeline with sustain, air jumps, and coyote time.
- Convex character collider set.
- Detectability by raycasts via solid inner body option.

## Collider constraints

CharacterVirtual requires convex shapes. Available options:

- Box
- Sphere
- Capsule
- Cylinder
- Tapered capsule
- Tapered cylinder
- Convex hull

Static-only body shapes (triangle mesh, plane, height field) are not available
for this behavior.

## Key editor properties

- Enabled on start.
- Body type (kinematic).
- Collider shape/source and override controls.
- Collider size/offset/scale and tapered radius scales.
- Collision layer and mask.
- Detectable by raycasts.
- Movement accel/decel/max for forward and sideways motion.
- Grounding: slope max angle, stair height, can be pushed, bind facing.
- Jump and fall settings: max fall speed, gravity, jump height, sustain,
  air-jump count, floor-jump air-jump policy, coyote time.

## Actions

### Configuration

- Set enabled.
- Set max falling speed.
- Set gravity.
- Set jump height.
- Set jump sustain time.
- Set forward acceleration/deceleration/max speed.
- Set sideways acceleration/deceleration/max speed.
- Set slope max angle.
- Set max stair height.
- Set can be pushed.
- Set bind object and forward angle.
- Set air jump count.
- Set floor jumps count as air jumps.
- Set coyote time.

### Collider

- Set collider size X.
- Set collider size Y.
- Set collider size Z.

### Controls

- Simulate move forward.
- Simulate move backward.
- Simulate move left.
- Simulate move right.
- Simulate jump.
- Simulate stick.
- Set forward angle.
- Teleport.

### State controls

- Abort jump.
- Allow jumping again.
- Forbid jumping again in air.

## Conditions

- Can jump.
- Is falling.
- Is jumping.
- Is moving.
- Is on floor.
- Is on given platform.
- Is colliding with object.

## Expressions

### Configuration

- `FallingSpeedMax`, `Gravity`, `JumpSpeed`, `JumpSustainTime`.
- `ForwardAcceleration`, `ForwardDeceleration`, `ForwardSpeedMax`.
- `SidewaysAcceleration`, `SidewaysDeceleration`, `SidewaysSpeedMax`.
- `AirJumpCount`, `AirJumpsRemaining`, `CoyoteTime`.
- `SlopeMaxAngle`, `MaxStairHeight`.
- `CanBePushed`, `BindObjectAndForwardAngle`,
  `FloorJumpsCountAsAirJumps`.

### Runtime state

- `CurrentFallSpeed`.
- `CurrentForwardSpeed`.
- `CurrentJumpSpeed`.
- `CurrentSidewaysSpeed`.
- `ForwardAngle`.

## Common workflows

1. Basic player controller:
	per tick, call simulate movement/jump actions based on input.
2. Double jump setup:
	set air jump count to 1 and tune sustain time and jump height.
3. Tight platforming:
	tune coyote time and max stair height for desired forgiveness.

## Troubleshooting

- Character does not move: confirm simulation actions are called every tick.
- Can never jump: verify on-floor conditions and coyote/air jump settings.
- Moves but faces wrong direction: tune bind-facing setting and forward angle.
- Collides unexpectedly: check layer/mask values.

## Related pages

- [Foundry Physics](./foundry-physics.md)
- [Foundry Physics Body](./foundry-physics-body.md)
- [Issue Reporting](../issue-reporting.md)
