# Foundry Camera

Foundry Camera is a multi-mode 3D camera plugin for Construct 3 with runtime
mode switching, optional weighted target aggregation, obstruction handling,
transitions, profiles, and trauma-based shake.

## Install and dependencies

1. Import the Foundry Camera addon package.
2. Add one Foundry Camera object to your project.
3. Optional: add Foundry Camera Target behavior to one or more objects and
	switch camera target mode to behavior-driven targeting.

Foundry Camera has no hard dependency, but integrates with Foundry Camera
Target for multi-target framing.

## Camera modes

- Orbit (`orbit`): target-centric free orbit controls.
- Follow (`follow`): third-person follow behavior with recenter controls.
- Character Orbit (`character-orbit`): character-focused orbit behavior.

## Key editor properties

- Initial mode, enabled, user input.
- Target offsets (X/Y/Z).
- Distance and min/max distance clamps.
- Yaw/pitch and min/max pitch clamps.
- Position/rotation smoothing.
- Follow height, mouse sensitivity, zoom speed.
- Obstruction settings:
  query mode, hit mode, offset space, collision mask, shape, multi-ray,
  response tuning.
- Debug logging.

## Actions

### General

- Set enabled.
- Enable user input.
- Set position smoothing.
- Set rotation smoothing.
- Set mouse sensitivity.
- Set zoom speed.

### Target

- Set target.
- Clear target.
- Set target offset.
- Set fixed target point.
- Use camera target behavior.
- Use manual target.

### Mode switching

- Set mode.
- Transition to mode.

### Orbit

- Set yaw.
- Set pitch.
- Set distance.
- Set zoom range.
- Set pitch range.

### Follow

- Set follow height.
- Suspend auto-follow.
- Set camera following style.
- Set camera following tuning.
- Recenter behind target.

### Obstruction

- Set obstruction enabled.
- Set obstruction query mode (`none`, `raycast`, `shapecast`, `multi-ray`).
- Set obstruction hit mode (`closest`, `any`, `all`).
- Set obstruction response mode.
- Set obstruction offset space (`world-locked`, `camera-plane-relative`).
- Set obstruction offsets.
- Set obstruction multi-ray.
- Set obstruction shape.
- Set obstruction filter and ignore UID.
- Set obstruction response tuning.
- Clear obstruction result.
- Manage custom probes (add/remove/clear).

### Shake

- Start shake.
- Stop shake.

### Profiles

- Save profile.
- Load profile.
- Delete profile.

### Debug

- Set debug.
- Debug dump state.
- Run ACE smoke test.

## Conditions and triggers

### General and targeting

- Is enabled.
- Has target.
- Is using target behavior.

### Modes and transitions

- Is mode active.
- Is transitioning.
- On mode changed.
- On transition finished.

### Obstruction

- Is obstructed.
- On obstruction result updated.
- On obstruction hit.
- On obstruction clear.

### Shake and profiles

- Is shaking.
- Has profile.

### Debug

- Debug self-test passed.

## Expressions

### Position and orientation

- `CameraX/Y/Z`, `PosX/Y/Z`.
- `LookAtX/Y/Z`.
- `Yaw`, `Pitch`, `CamYaw`, `CamPitch`.
- `TargetYaw`, `TargetPitch`, `TargetDistance`.
- `Distance`, `Zoom`.

### Movement basis and tuning

- `CamForwardX/Y`, `CamRightX/Y`.
- `MinDistance`, `MaxDistance`, `MinPitch`, `MaxPitch`.
- `MouseSensitivity`, `ZoomSpeed`, `PositionSmoothing`, `RotationSmoothing`.

### Target and mode

- `CurrentMode`.
- `TargetX/Y/Z`.
- `TargetBehaviorCount`.
- `FollowHeight`, `FollowStyle`.

### Obstruction

- `Obstructed`, `HitCount`, `DesiredDistance`, `EffectiveDistance`.
- Closest-hit expressions for position/normal/distance/body metadata.
- Indexed-hit expressions (`...At(index)`).
- `ClosestHitJSON`, `HitsJSON`.

### Shake, profiles, debug

- `ShakeTrauma`.
- `ProfileCount`.
- `DebugSelfTestPassed`, `DebugSelfTestFailures`, `DebugSelfTestTime`.

## Common workflows

1. Basic orbit camera:
	set mode to Orbit, set target, tune yaw/pitch range and distance.
2. Character follow:
	set mode to Follow, assign character object, tune follow height and recenter.
3. Multi-target framing:
	add Foundry Camera Target behavior to actors, then switch camera to
	behavior-driven targeting.
4. Obstruction-safe camera:
	enable obstruction, choose query mode, and tune in/out smoothing plus
	minimum clear distance.

## Troubleshooting

- Camera not moving: verify camera is enabled and has a valid target or fixed
  target point.
- Multi-target not used: ensure Use camera target behavior is active and at
  least one target behavior instance is enabled.
- Obstruction seems too aggressive: reduce padding and increase smooth-out.
- Obstruction does nothing: verify query mode is not `none` and collision mask
  includes relevant bodies.

## Related pages

- [Foundry Camera Target](./foundry-camera-target.md)
- [Issue Reporting](../issue-reporting.md)
- [Troubleshooting](../troubleshooting.md)
