export type Channel = "whatsapp" | "social" | "email" | "calling";

export interface ProviderAdapter {
  send(input: { to: string; body: string; campaignId?: string }): Promise<{ externalId: string; status: string }>;
}

export const mockProvider: ProviderAdapter = {
  async send(input) {
    return { externalId: `mock-${Date.now()}`, status: "queued" };
  }
};

export function providerFor(channel: Channel): ProviderAdapter {
  return mockProvider;
}
