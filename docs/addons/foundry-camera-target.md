# Foundry Camera Target

Foundry Camera Target is a per-instance behavior that marks objects as camera
targets and contributes them to a weighted average point.

## Install and dependencies

1. Import the Foundry Camera Target addon package.
2. Add the behavior to objects you want considered by camera framing.
3. In Foundry Camera, switch to behavior-driven targeting.

Designed to pair with Foundry Camera. The average expressions can still be read
independently.

## Editor properties

- Enabled on start.
- Weight.
- Offset X/Y/Z.

Each active instance contributes:

`(object-position + local-offset) * weight`

The camera reads the weighted average of all enabled instances.

## Actions

- Set enabled.
- Set weight.
- Set offset.

## Conditions

- Is enabled.

## Expressions

- `Weight`.
- `OffsetX`, `OffsetY`, `OffsetZ`.
- `AvgX`, `AvgY`, `AvgZ`.
- `Count`.

## Common workflows

1. Party framing:
	set all player targets enabled with equal weight.
2. Focus bias:
	raise one actor weight (for example boss or objective).
3. Smooth handoff:
	gradually animate weights to transition focus.

## Troubleshooting

- Camera ignores targets: ensure camera is switched to behavior mode.
- Average seems wrong: check disabled targets and zero weights.
- Target too high/low: adjust target offset Z per object type.

## Related pages

- [Foundry Camera](./foundry-camera.md)
- [Issue Reporting](../issue-reporting.md)
