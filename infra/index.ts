import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket('my-bucket');
const appEngine = new gcp.appengine.Application('narnok-web', {
  locationId: 'australia-southeast1'
});
// Export the DNS name of the bucket
export const bucketName = bucket.url;
export const appEngineId = appEngine.id;
