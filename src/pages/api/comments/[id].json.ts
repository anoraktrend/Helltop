import type { APIRoute } from 'astro';
import {
  getCommentsCollection,
  isAtlasNetworkError,
  logAtlasNetworkError,
  ATLAS_NETWORK_ERROR_PAYLOAD,
} from '../../../db';
import { ObjectId } from 'mongodb';
import { isAdmin } from '../../../utils/admin';
import { isDataApiConfigured, dataApiDeleteOneById } from '../../../db/atlasDataApi';

export const DELETE: APIRoute = async ({ params, cookies }) => {
  try {
    if (!(await isAdmin(cookies))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: 'Comment ID is required' }), {
        status: 400,
      });
    }

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid ID format' }), {
        status: 400,
      });
    }

    try {
      const collection = await getCommentsCollection();
      await collection.deleteOne({ _id: new ObjectId(id) } as never);

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      if (isAtlasNetworkError(error)) {
        logAtlasNetworkError(error, `DELETE /api/comments/${id}.json`);
        if (await isDataApiConfigured()) {
          try {
            await dataApiDeleteOneById(id);
            return new Response(JSON.stringify({ success: true, via: 'data-api' }), { status: 200 });
          } catch (dataApiError) {
            console.error('Data API fallback also failed for DELETE /api/comments/[id].json:', dataApiError);
          }
        }
        return new Response(JSON.stringify(ATLAS_NETWORK_ERROR_PAYLOAD), {
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
        });
      }
      throw error;
    }
  } catch (error) {
    if (isAtlasNetworkError(error)) {
      logAtlasNetworkError(error, `DELETE /api/comments/${params?.id}.json (outer)`);
      return new Response(JSON.stringify(ATLAS_NETWORK_ERROR_PAYLOAD), {
        status: 503,
        headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
      });
    }
    console.error(`Error deleting comment ${params?.id}:`, error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
};
