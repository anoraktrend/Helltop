import type { APIRoute } from 'astro';
import { getCommentsCollection } from '../../../db';
import { ObjectId } from 'mongodb';
import { isAdmin } from '../../../utils/admin';

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

    const collection = await getCommentsCollection();
    await collection.deleteOne({ _id: new ObjectId(id) } as never);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(`Error deleting comment ${params?.id}:`, error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
};
