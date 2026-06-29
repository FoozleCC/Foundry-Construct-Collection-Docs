# <img class="addon-heading" src="/foundry-camera-target.svg" alt="Foundry Camera Target icon"> Foundry Camera Target

Foundry Camera Target is a per-instance behavior that marks objects as camera
targets and contributes them to a weighted average point.

## Install and dependencies

1. Import the Foundry Camera Target addon package.
2. Add the behavior to objects you want considered by camera framing.
3. In Foundry Camera, switch to behavior-driven targeting.

Designed to pair with Foundry Camera. The average expressions can still be read
independently.

## Scripting

When using JavaScript or TypeScript, treat this behavior as a target-contributor
component: enable/disable targets and adjust weights at runtime to control
camera framing without changing camera mode logic.

## Camera Target properties

### Enabled on start

If enabled, this instance contributes to the weighted target average at startup.

### Weight

Relative influence of this target in the weighted average. A value of `0`
effectively removes this instance from the aggregate target.

### Offset X, Offset Y, Offset Z

Local per-target offset applied before averaging.

Each active instance contributes:

`(object-position + local-offset) * weight`

The camera reads the weighted average of all enabled instances.

## Camera Target conditions

### Is enabled

True when this instance is currently active as a target contributor.

## Camera Target actions

- Set enabled: toggle this target contribution.
- Set weight: update runtime contribution weight.
- Set offset: update local target offset.

## Camera Target expressions

- `Weight`: this instance's current weight.
- `OffsetX`, `OffsetY`, `OffsetZ`: current per-instance offsets.
- `AvgX`, `AvgY`, `AvgZ`: global weighted average target position.
- `Count`: number of enabled target contributors.

## Typical usage

1. Party framing:
   enable all active party members with similar weights.
2. Focus bias:
   increase weight for key actors (boss/objective/speaker).
3. Smooth handoff:
   animate weights over time to transition camera focus smoothly.

## Troubleshooting

- Camera ignores targets: ensure camera is switched to behavior mode.
- Average seems wrong: check disabled targets and zero weights.
- Target too high/low: adjust target offset Z per object type.

## Related pages

- [Foundry Camera](./foundry-camera.md)
- [Issue Reporting](../issue-reporting.md)
