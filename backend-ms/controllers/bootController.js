import { checkFeatureEnabled } from "../helpers/checkFeatureEnabled.js";

export const bootDataHandler = async (req, res) => {
  try {
    const flagsToCheck = ["demo1", "darkMode"];

    const featureFlags = {};

    await Promise.all(
      flagsToCheck.map(async (flag) => {
        const enabled = await checkFeatureEnabled(flag);
        featureFlags[flag] = enabled;
      })
    );

    res.json({ featureFlags });
  } catch (error) {
    console.error("Error loading bootdata:", error.message);
    res.status(400).json({ error: "Failed to load bootdata" });
  }
};
