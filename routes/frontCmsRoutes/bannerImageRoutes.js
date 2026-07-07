import express from 'express';

import {
    getAllBannerImages,
    getBannerImageById,
    createBannerImage,
    updateBannerImage,
    deleteBannerImage
} from '../../controllers/frontCmsController/bannerImageController.js';

const router = express.Router();

router.get('/', getAllBannerImages);

router.get('/:id', getBannerImageById);

router.post('/', createBannerImage);

router.put('/:id', updateBannerImage);

router.delete('/:id', deleteBannerImage);

export default router;
