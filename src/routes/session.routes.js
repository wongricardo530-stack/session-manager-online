import express from 'express';
import { createSession } from '../services/session.service.js';

const router = express.Router();

router.get('/session', async (req, res) => {
  try {
    const result = await createSession();

    if (!result || !result.session) {
      return res.status(502).json({
        code: 502,
        error: 'Invalid response from auth service'
      });
    }

    // ✅ RESPUESTA EXACTA QUE NECESITAS
    return res.status(200).json({
      code: 200,
      session: result.session
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    return res.status(500).json({
      code: 500,
      error: 'Internal server error'
    });
  }
});

export default router;