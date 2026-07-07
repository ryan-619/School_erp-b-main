import mongoose from 'mongoose';

const tenantConnections = new Map();

export const getTenantDB = async (tenantId, mongoUri) => {
  if (tenantConnections.has(tenantId)) {
    return tenantConnections.get(tenantId);
  }

  const conn = await mongoose.createConnection(mongoUri, { maxPoolSize: 5 });
  tenantConnections.set(tenantId, conn);
  console.log(`Tenant DB connected: ${tenantId}`);
  return conn;
};

export const closeTenantConnections = async () => {
  for (const [id, conn] of tenantConnections) {
    await conn.close();
    console.log(`Closed tenant DB: ${id}`);
  }
  tenantConnections.clear();
};
