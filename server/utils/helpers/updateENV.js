const KEY_MAPPING = {
  LLMProvider: {
    envKey: "LLM_PROVIDER",
    checks: [isSafe, isNotEmpty, supportedLLM],
    postUpdate: [wipeWorkspaceModelPreference],
  },
  // OpenAI Settings
  OpenAiKey: {
    envKey: "OPEN_AI_KEY",
    checks: [isSafe, isNotEmpty, validOpenAIKey],
  },
  OpenAiModelPref: {
    envKey: "OPEN_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },
  // Azure OpenAI Settings
  AzureOpenAiEndpoint: {
    envKey: "AZURE_OPENAI_ENDPOINT",
    checks: [isSafe, isNotEmpty, validAzureURL],
  },
  AzureOpenAiTokenLimit: {
    envKey: "AZURE_OPENAI_TOKEN_LIMIT",
    checks: [isSafe, validOpenAiTokenLimit],
  },
  AzureOpenAiKey: {
    envKey: "AZURE_OPENAI_KEY",
    checks: [isSafe, isNotEmpty],
  },
  AzureOpenAiModelPref: {
    envKey: "OPEN_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },
  AzureOpenAiEmbeddingModelPref: {
    envKey: "EMBEDDING_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },

  // Anthropic Settings
  AnthropicApiKey: {
    envKey: "ANTHROPIC_API_KEY",
    checks: [isSafe, isNotEmpty, validAnthropicApiKey],
  },
  AnthropicModelPref: {
    envKey: "ANTHROPIC_MODEL_PREF",
    checks: [isSafe, isNotEmpty, validAnthropicModel],
  },

  GeminiLLMApiKey: {
    envKey: "GEMINI_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  GeminiLLMModelPref: {
    envKey: "GEMINI_LLM_MODEL_PREF",
    checks: [isSafe, isNotEmpty, validGeminiModel],
  },

  // LMStudio Settings
  LMStudioBasePath: {
    envKey: "LMSTUDIO_BASE_PATH",
    checks: [isSafe, isNotEmpty, validLLMExternalBasePath, validDockerizedUrl],
  },
  LMStudioTokenLimit: {
    envKey: "LMSTUDIO_MODEL_TOKEN_LIMIT",
    checks: [isSafe, nonZero],
  },

  // LocalAI Settings
  LocalAiBasePath: {
    envKey: "LOCAL_AI_BASE_PATH",
    checks: [isSafe, isNotEmpty, validLLMExternalBasePath, validDockerizedUrl],
  },
  LocalAiModelPref: {
    envKey: "LOCAL_AI_MODEL_PREF",
    checks: [isSafe],
  },
  LocalAiTokenLimit: {
    envKey: "LOCAL_AI_MODEL_TOKEN_LIMIT",
    checks: [isSafe, nonZero],
  },
  LocalAiApiKey: {
    envKey: "LOCAL_AI_API_KEY",
    checks: [isSafe],
  },

  OllamaLLMBasePath: {
    envKey: "OLLAMA_BASE_PATH",
    checks: [isSafe, isNotEmpty, validOllamaLLMBasePath, validDockerizedUrl],
  },
  OllamaLLMModelPref: {
    envKey: "OLLAMA_MODEL_PREF",
    checks: [isSafe],
  },
  OllamaLLMTokenLimit: {
    envKey: "OLLAMA_MODEL_TOKEN_LIMIT",
    checks: [isSafe, nonZero],
  },

  // Mistral AI API Settings
  MistralApiKey: {
    envKey: "MISTRAL_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  MistralModelPref: {
    envKey: "MISTRAL_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },

  // Native LLM Settings
  NativeLLMModelPref: {
    envKey: "NATIVE_LLM_MODEL_PREF",
    checks: [isSafe, isDownloadedModel],
  },
  NativeLLMTokenLimit: {
    envKey: "NATIVE_LLM_MODEL_TOKEN_LIMIT",
    checks: [isSafe, nonZero],
  },

  // Hugging Face LLM Inference Settings
  HuggingFaceLLMEndpoint: {
    envKey: "HUGGING_FACE_LLM_ENDPOINT",
    checks: [isSafe, isNotEmpty, isValidURL, validHuggingFaceEndpoint],
  },
  HuggingFaceLLMAccessToken: {
    envKey: "HUGGING_FACE_LLM_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  HuggingFaceLLMTokenLimit: {
    envKey: "HUGGING_FACE_LLM_TOKEN_LIMIT",
    checks: [isSafe, nonZero],
  },

  EmbeddingEngine: {
    envKey: "EMBEDDING_ENGINE",
    checks: [isSafe, supportedEmbeddingModel],
  },
  EmbeddingBasePath: {
    envKey: "EMBEDDING_BASE_PATH",
    checks: [isSafe, isNotEmpty, validDockerizedUrl],
  },
  EmbeddingModelPref: {
    envKey: "EMBEDDING_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },
  EmbeddingModelMaxChunkLength: {
    envKey: "EMBEDDING_MODEL_MAX_CHUNK_LENGTH",
    checks: [isSafe, nonZero],
  },

  // Vector Database Selection Settings
  VectorDB: {
    envKey: "VECTOR_DB",
    checks: [isSafe, isNotEmpty, supportedVectorDB],
  },

  // Chroma Options
  ChromaEndpoint: {
    envKey: "CHROMA_ENDPOINT",
    checks: [isSafe, isValidURL, validChromaURL, validDockerizedUrl],
  },
  ChromaApiHeader: {
    envKey: "CHROMA_API_HEADER",
    checks: [isSafe],
  },
  ChromaApiKey: {
    envKey: "CHROMA_API_KEY",
    checks: [isSafe],
  },

  // Weaviate Options
  WeaviateEndpoint: {
    envKey: "WEAVIATE_ENDPOINT",
    checks: [isSafe, isValidURL, validDockerizedUrl],
  },
  WeaviateApiKey: {
    envKey: "WEAVIATE_API_KEY",
    checks: [isSafe],
  },

  // QDrant Options
  QdrantEndpoint: {
    envKey: "QDRANT_ENDPOINT",
    checks: [isSafe, isValidURL, validDockerizedUrl],
  },
  QdrantApiKey: {
    envKey: "QDRANT_API_KEY",
    checks: [isSafe],
  },
  PineConeKey: {
    envKey: "PINECONE_API_KEY",
    checks: [isSafe],
  },
  PineConeIndex: {
    envKey: "PINECONE_INDEX",
    checks: [isSafe],
  },

  // Milvus Options
  MilvusAddress: {
    envKey: "MILVUS_ADDRESS",
    checks: [isSafe, isValidURL, validDockerizedUrl],
  },
  MilvusUsername: {
    envKey: "MILVUS_USERNAME",
    checks: [isSafe, isNotEmpty],
  },
  MilvusPassword: {
    envKey: "MILVUS_PASSWORD",
    checks: [isSafe, isNotEmpty],
  },

  // Zilliz Cloud Options
  ZillizEndpoint: {
    envKey: "ZILLIZ_ENDPOINT",
    checks: [isSafe, isValidURL],
  },
  ZillizApiToken: {
    envKey: "ZILLIZ_API_TOKEN",
    checks: [isSafe, isNotEmpty],
  },

  // Astra DB Options

  AstraDBApplicationToken: {
    envKey: "ASTRA_DB_APPLICATION_TOKEN",
    checks: [isSafe, isNotEmpty],
  },
  AstraDBEndpoint: {
    envKey: "ASTRA_DB_ENDPOINT",
    checks: [isSafe, isNotEmpty],
  },

  // Together Ai Options
  TogetherAiApiKey: {
    envKey: "TOGETHER_AI_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  TogetherAiModelPref: {
    envKey: "TOGETHER_AI_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },

  // Perplexity Options
  PerplexityApiKey: {
    envKey: "PERPLEXITY_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  PerplexityModelPref: {
    envKey: "PERPLEXITY_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },

  // OpenRouter Options
  OpenRouterApiKey: {
    envKey: "OPENROUTER_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  OpenRouterModelPref: {
    envKey: "OPENROUTER_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },

  // Groq Options
  GroqApiKey: {
    envKey: "GROQ_API_KEY",
    checks: [isSafe, isNotEmpty],
  },
  GroqModelPref: {
    envKey: "GROQ_MODEL_PREF",
    checks: [isSafe, isNotEmpty],
  },

  // System Settings
  AuthToken: {
    envKey: "AUTH_TOKEN",
    checks: [isSafe, requiresForceMode],
  },
  JWTSecret: {
    envKey: "JWT_SECRET",
    checks: [isSafe, requiresForceMode],
  },
};

// check if user input is safe to be considered as an environment variable
// generic check for all the values - could be possibly distinguished - letters, numbers, URLs, ...
function isSafe(input = "") {
  if (typeof input !== "string")
    return "Value is not a string";
  if (!/^[\x00-\x7F]*$/.test(input))
    return "Value contains non ASCII characters";
  if (!/^[A-Za-z0-9\-_\.:/?\+=]*$/.test(input))            // letter, numbers, - . : / ? + =
    return "Value contains blacklisted characters";

  return null;
}

function isNotEmpty(input = "") {
  return !input || input.length === 0 ? "Value cannot be empty" : null;
}

function nonZero(input = "") {
  if (isNaN(Number(input))) return "Value must be a number";
  return Number(input) <= 0 ? "Value must be greater than zero" : null;
}

function isValidURL(input = "") {
  try {
    new URL(input);
    return null;
  } catch (e) {
    return "URL is not a valid URL.";
  }
}

function validOpenAIKey(input = "") {
  return input.startsWith("sk-") ? null : "OpenAI Key must start with sk-";
}

function validAnthropicApiKey(input = "") {
  return input.startsWith("sk-ant-")
    ? null
    : "Anthropic Key must start with sk-ant-";
}

function validLLMExternalBasePath(input = "") {
  try {
    new URL(input);
    if (!input.includes("v1")) return "URL must include /v1";
    if (input.split("").slice(-1)?.[0] === "/")
      return "URL cannot end with a slash";
    return null;
  } catch {
    return "Not a valid URL";
  }
}

function validOllamaLLMBasePath(input = "") {
  try {
    new URL(input);
    if (input.split("").slice(-1)?.[0] === "/")
      return "URL cannot end with a slash";
    return null;
  } catch {
    return "Not a valid URL";
  }
}

function supportedLLM(input = "") {
  const validSelection = [
    "openai",
    "azure",
    "anthropic",
    "gemini",
    "lmstudio",
    "localai",
    "ollama",
    "native",
    "togetherai",
    "mistral",
    "huggingface",
    "perplexity",
    "openrouter",
    "groq",
  ].includes(input);
  return validSelection ? null : `${input} is not a valid LLM provider.`;
}

function validGeminiModel(input = "") {
  const validModels = ["gemini-pro"];
  return validModels.includes(input)
    ? null
    : `Invalid Model type. Must be one of ${validModels.join(", ")}.`;
}

function validAnthropicModel(input = "") {
  const validModels = [
    "claude-instant-1.2",
    "claude-2.0",
    "claude-2.1",
    "claude-3-opus-20240229",
    "claude-3-sonnet-20240229",
  ];
  return validModels.includes(input)
    ? null
    : `Invalid Model type. Must be one of ${validModels.join(", ")}.`;
}

function supportedEmbeddingModel(input = "") {
  const supported = ["openai", "azure", "localai", "native", "ollama"];
  return supported.includes(input)
    ? null
    : `Invalid Embedding model type. Must be one of ${supported.join(", ")}.`;
}

function supportedVectorDB(input = "") {
  const supported = [
    "chroma",
    "pinecone",
    "lancedb",
    "weaviate",
    "qdrant",
    "milvus",
    "zilliz",
    "astra",
  ];
  return supported.includes(input)
    ? null
    : `Invalid VectorDB type. Must be one of ${supported.join(", ")}.`;
}

function validChromaURL(input = "") {
  return input.slice(-1) === "/"
    ? `Chroma Instance URL should not end in a trailing slash.`
    : null;
}

function validAzureURL(input = "") {
  try {
    new URL(input);
    if (!input.includes("openai.azure.com"))
      return "URL must include openai.azure.com";
    return null;
  } catch {
    return "Not a valid URL";
  }
}

function validOpenAiTokenLimit(input = "") {
  const tokenLimit = Number(input);
  if (isNaN(tokenLimit)) return "Token limit is not a number";
  if (![4_096, 16_384, 8_192, 32_768, 128_000].includes(tokenLimit))
    return "Invalid OpenAI token limit.";
  return null;
}

function requiresForceMode(_, forceModeEnabled = false) {
  return forceModeEnabled === true ? null : "Cannot set this setting.";
}

function isDownloadedModel(input = "") {
  const fs = require("fs");
  const path = require("path");
  const storageDir = path.resolve(
    process.env.STORAGE_DIR
      ? path.resolve(process.env.STORAGE_DIR, "models", "downloaded")
      : path.resolve(__dirname, `../../storage/models/downloaded`)
  );
  if (!fs.existsSync(storageDir)) return false;

  const files = fs
    .readdirSync(storageDir)
    .filter((file) => file.includes(".gguf"));
  return files.includes(input);
}

function validDockerizedUrl(input = "") {
  if (process.env.ANYTHING_LLM_RUNTIME !== "docker") return null;
  try {
    const { hostname } = new URL(input);
    if (["localhost", "127.0.0.1", "0.0.0.0"].includes(hostname.toLowerCase()))
      return "Localhost, 127.0.0.1, or 0.0.0.0 origins cannot be reached from inside the AnythingLLM container. Please use host.docker.internal, a real machine ip, or domain to connect to your service.";
    return null;
  } catch {}
  return null;
}

function validHuggingFaceEndpoint(input = "") {
  return input.slice(-6) !== ".cloud"
    ? `Your HF Endpoint should end in ".cloud"`
    : null;
}

// If the LLMProvider has changed we need to reset all workspace model preferences to
// null since the provider<>model name combination will be invalid for whatever the new
// provider is.
async function wipeWorkspaceModelPreference(key, prev, next) {
  if (prev === next) return;
  const { Workspace } = require("../../models/workspace");
  await Workspace.resetWorkspaceChatModels();
}

// This will force update .env variables which for any which reason were not able to be parsed or
// read from an ENV file as this seems to be a complicating step for many so allowing people to write
// to the process will at least alleviate that issue. It does not perform comprehensive validity checks or sanity checks
// and is simply for debugging when the .env not found issue many come across.
async function updateENV(newENVs = {}, force = false, userId = null) {
  let error = "";
  const validKeys = Object.keys(KEY_MAPPING);
  const ENV_KEYS = Object.keys(newENVs).filter(
    (key) => validKeys.includes(key) && !newENVs[key].includes("******") // strip out answers where the value is all asterisks
  );
  const newValues = {};

  for (const key of ENV_KEYS) {
    const { envKey, checks, postUpdate = [] } = KEY_MAPPING[key];
    const prevValue = process.env[envKey];
    const nextValue = newENVs[key];
    const errors = checks
      .map((validityCheck) => validityCheck(nextValue, force))
      .filter((err) => typeof err === "string");

    if (errors.length > 0) {
      error += errors.join("\n");
      break;
    }

    newValues[key] = nextValue;
    process.env[envKey] = nextValue;

    for (const postUpdateFunc of postUpdate)
      await postUpdateFunc(key, prevValue, nextValue);
  }

  await logChangesToEventLog(newValues, userId);
  return { newValues, error: error?.length > 0 ? error : false };
}

async function logChangesToEventLog(newValues = {}, userId = null) {
  const { EventLogs } = require("../../models/eventLogs");
  const eventMapping = {
    LLMProvider: "update_llm_provider",
    EmbeddingEngine: "update_embedding_engine",
    VectorDB: "update_vector_db",
  };

  for (const [key, eventName] of Object.entries(eventMapping)) {
    if (!newValues.hasOwnProperty(key)) continue;
    await EventLogs.logEvent(eventName, {}, userId);
  }
  return;
}

async function dumpENV() {
  const fs = require("fs");
  const path = require("path");

  const frozenEnvs = {};
  const protectedKeys = [
    ...Object.values(KEY_MAPPING).map((values) => values.envKey),
    "STORAGE_DIR",
    "SERVER_PORT",
    // Password Schema Keys if present.
    "PASSWORDMINCHAR",
    "PASSWORDMAXCHAR",
    "PASSWORDLOWERCASE",
    "PASSWORDUPPERCASE",
    "PASSWORDNUMERIC",
    "PASSWORDSYMBOL",
    "PASSWORDREQUIREMENTS",
    // HTTPS SETUP KEYS
    "ENABLE_HTTPS",
    "HTTPS_CERT_PATH",
    "HTTPS_KEY_PATH",
    // DISABLED TELEMETRY
    "DISABLE_TELEMETRY",
  ];

  for (const key of protectedKeys) {
    const envValue = process.env?.[key] || null;
    if (!envValue) continue;
    frozenEnvs[key] = process.env?.[key] || null;
  }

  var envResult = `# Auto-dump ENV from system call on ${new Date().toTimeString()}\n`;
  envResult += Object.entries(frozenEnvs)
    .map(([key, value]) => {
      if(isSafe(value) === null)
        return `${key}='${value}'`;
    })
    .join("\n");

  const envPath = path.join(__dirname, "../../.env");
  fs.writeFileSync(envPath, envResult, { encoding: "utf8", flag: "w" });
  return true;
}

module.exports = {
  dumpENV,
  updateENV,
};
