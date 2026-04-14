import express from 'express';
import { createSession } from '../services/session.service.js';

const router = express.Router();

router.get('/session', async (req, res) => {
  try {
    const { code, session } = await createSession();

    if (code === 200 && session) {
      // Devuelve SOLO la sesión
      console.log(res)
      return res.status(200).send(session);

    }

    return res.status(500).send('Error creating session');

  } catch (error) {
    console.error('Session error:', error.response?.data || error.message);
    return res.status(500).send('Internal server error');
  }
});

export default router;