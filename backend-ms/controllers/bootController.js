import { getFeatureFlags } from "../helpers/getFeatureFlags.js";

export const bootDataHandler = async (req, res) => {
  try {
    const flagsNames = process.env.FEATURE_FLAGS_CONFIG.split(",");

    const allFeatureFlags = await getFeatureFlags();

    const filteredFeatureFlags = allFeatureFlags.reduce(
      (result, featureFlag) => {
        if (flagsNames.includes(featureFlag.name)) {
          result[featureFlag.name] = featureFlag.enabled;
        }
        return result;
      },
      {}
    );

    return res.json(filteredFeatureFlags);
  } catch (error) {
    console.error("Error loading bootdata:", error);
    return res.status(400).json({ error: "Failed to load bootdata" });
  }
};
