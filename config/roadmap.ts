export const roadmapData = {
  title: "BITORA MASTER ROADMAP",
  manifesto:
    "Every system must be verifiable, every actor must be accountable, and every transaction must be auditable.",
  author: "— Bitora Systems Manifesto",

  phases: [
    {
      id: 0,
      title: "Phase 0 - Foundational Protocol Architecture",
      status: "completed" as const,
      period: "Completed October-December 2023",
      overview:
        "This phase defined Bitora's sovereign blockchain structure using the Cosmos SDK with CometBFT consensus. We opted for a modular design that enables permissioned smart contracts, deterministic token classification, and retail-grade transactional finality.",
      keyOutputs: [
        "Constraint-driven protocol scope",
        "Isolation of execution layers (tokenization, settlement, compliance)",
        "Governance structure defined as on-chain weighted quorum-based voting",
        "Bridgeless architecture to preserve economic closure",
      ],
    },
    {
      id: 1,
      title: "Phase 1 - Core Blockchain Development",
      status: "completed" as const,
      period: "Completed January 2024 - July 2025",
      overview:
        "We implemented the first production-grade build of the Bitora chain. The system includes deterministic fee logic, permissioned token creation, validator-enforced liquidity bonding, and native rug-pull detection heuristics.",
      keyOutputs: [
        "Token classification engine (Main, Utility, Meme)",
        "Smart contract sandbox with identity-binding",
        "Flat gas execution for standard deployments, complexity-based for advanced contracts",
        "Automated detection subsystem for malicious token behavior (freeze hooks, anomaly triggers)",
        "Governance-integrated validator queue",
      ],
    },
    {
      id: 2,
      title: "Phase 2 - Legal & Compliance Engine",
      status: "in-progress" as const,
      period: "Started August 2025 - Target Completion: November 2025",
      overview:
        "Bitora's compliance engine embeds legal determinism at the protocol level—every contract and token must pass through a cryptographically enforced regulatory filter. We are currently integrating a compliance middleware layer that interlocks with on-chain identity and metadata registries.",
      keyOutputs: [
        "KYC/AML-bound token deployment permissions (via hash-locked identity maps)",
        "Jurisdictional labeling logic embedded in smart contract headers",
        "Validator-layer enforcement filters for jurisdictional noncompliance",
        "Legal schema metadata for all assets created within the chain",
        "Completion of jurisdictional attestation APIs",
        "Rollout of smart contract templates with embedded legal constraint types",
      ],
    },
    {
      id: 3,
      title: "Phase 3 - Controlled Token Onboarding Window",
      status: "scheduled" as const,
      period: "Scheduled: December 2025 - February 2026",
      overview:
        "This phase initiates the first permissioned public onboarding of assets into the Bitora ecosystem. Tokens must undergo compliance evaluation, identity verification, and classification audits before deployment.",
      keyOutputs: [
        "Token issuers must be identity-bound",
        "Smart contracts classified and fingerprinted on-chain",
        "Liquidity bonding thresholds enforced by protocol (non-custodial staking)",
        "All tokens include immutable links to origin credentials and legal docs",
        "Freeze at source enabled on any deviation from contract behavior",
      ],
    },
    {
      id: 4,
      title: "Phase 4 - Native Exchange Infrastructure",
      status: "scheduled" as const,
      period: "Scheduled: March - May 2026",
      overview:
        "The Bitora Exchange (DEX) will function as a native asset liquidity engine, exclusively for tokens deployed within the Bitora chain. No external assets permitted.",
      keyOutputs: [
        "AMM-orderbook hybrid model based on token volume tier",
        "Full token registry enforcement (Main/Utility/Meme segmentation)",
        "Protocol-owned liquidity (POL) pools with epoch-based slippage governors",
        "Fair matching guarantees + validator-signed execution proofs",
        "On-chain swap settlements, wrapped fees, and settlement auditing",
      ],
    },
    {
      id: 5,
      title: "Phase 5 - Point-of-Sale (POS) Protocol Integration",
      status: "scheduled" as const,
      period: "Scheduled: June - August 2026",
      overview:
        "The Bitora POS protocol transforms smart contracts into physical transaction endpoints. POS terminals communicate directly with Bitora smart contracts, enabling frictionless consumer-to-retail payments with cryptographic traceability.",
      keyOutputs: [
        "NFC+QR POS terminals (firmware-signed, protocol-native)",
        "Smart contract template for product pricing + transaction fee + merchant credit",
        "Fee split: validator reward pool + infrastructure incentive",
        "Retailer node license bonded via terminal registration",
        "Merchant dashboard smart contract deployment + sync logic",
      ],
    },
    {
      id: 6,
      title: "Phase 6 - On-Chain Physical Retail Pilot (1 Store)",
      status: "scheduled" as const,
      period: "Scheduled: September - November 2026",
      overview:
        "Bitora's real-world economic thesis will be validated through a single fully-on-chain retail store. This serves as a demonstrator of deterministic, legally bound commercial execution—orders, payroll, loyalty, and profits governed entirely on-chain.",
      keyOutputs: [
        "Store operates as a Bitora node (light client)",
        "All customer transactions processed via protocol-native POS",
        "Smart contract governs: supply chain, sales reporting, staff pay, revenue splits",
        "Auditable by ecosystem; no off-chain dependencies",
        "Real-time sales + operations explorer node",
      ],
    },
    {
      id: 7,
      title: "Phase 7 - National Multi-Store Retail Rollout (100 Stores)",
      status: "scheduled" as const,
      period: "Scheduled: January - December 2027",
      overview:
        "This phase scales the single-store model to 100+ retail units nationwide. Each store acts as a validator-integrated retail node, with identity-bound licenses, profit-sharing contracts, and community-based oversight.",
      keyOutputs: [
        "Onboarding through compliance gateway",
        "Franchise licensing uses staked operational contracts",
        "Store earnings auto-split: ecosystem reinjection + operator share",
        "Validator indexers log transactions, workforce activity, and royalties",
        "Stores vote on operational protocol upgrades via stake-weighted governance",
      ],
    },
  ],
};

export type RoadmapPhase = (typeof roadmapData.phases)[0];
export type PhaseStatus = "completed" | "in-progress" | "scheduled";
