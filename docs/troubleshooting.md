# Troubleshooting

## Common issues

### Addon installed but not visible

- Ensure Construct 3 restarted after install.
- Confirm addon type is compatible with your object type.

### Runtime action does nothing

- Verify addon is enabled.
- Confirm prerequisites are present (for example physics world before physics behaviors).

### Camera has no target behavior contribution

- Ensure Foundry Camera is set to use camera target behavior mode.
- Check at least one Foundry Camera Target instance is enabled.
- Verify target weights are above zero.

### Physics body or character is not created

- Ensure exactly one Foundry Physics object exists and is initialized.
- Confirm physics ready lifecycle event has completed before spawning bodies.
- Check collider shape/source validity for selected host object.

### Collision callbacks are missing

- Verify both collision layer and mask combinations allow overlap.
- Confirm behavior is enabled and body exists.
- For object-parameter collision triggers, verify the object type/family selection.

### Character controller cannot jump

- Check `Can jump` conditions and whether character is on floor.
- Tune coyote time and air jump count.
- Confirm jump simulation actions are called while input is active.

### Documentation mismatch with behavior

- Check the addon version in use.
- Review release notes for recent API or behavior changes.

## Reporting an issue

Use the public issue forms:

- https://github.com/FoozleCC/Foundry-Construct-Collection/issues/new/choose

Include a minimal reproducible project with exact steps, expected result, and
actual result for fastest triage.
