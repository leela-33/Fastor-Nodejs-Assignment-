const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
submitPublicEnquiry,
getPublicEnquiries,
getPrivateEnquiries,
claimLead,
} = require('../controllers/enquiryController');


// Public: submit enquiry
router.post('/public', submitPublicEnquiry);


// Protected: fetch unclaimed public enquiries (still protected in case you want only counselors to list them)
router.get('/public', auth, getPublicEnquiries);


// Protected: get private enquiries (claimed by logged in counselor)
router.get('/private', auth, getPrivateEnquiries);


// Protected: claim a lead
router.patch('/:id/claim', auth, claimLead);


module.exports = router;