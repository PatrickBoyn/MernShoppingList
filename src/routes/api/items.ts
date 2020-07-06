import Item from '../../models/Item';

const router = require('express').Router();

// @route GET api/items
// @description GET All items
// @access Public
router.get('/', async (req: any, res: any) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
});

// @route POST api/items/"id
// @description Create an item
// @access Public
router.post('/', (req: any, res: any) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @description Deletes an item
// @access Public
router.delete('/:id', (req: any, res: any) => {
    Item.findById(req.params.id)
        // Ignoring the fact that it could be null for now.
        .then(item => item!.remove()
            .then(() => res.json({message: 'Item deleted.'})
                .catch((error: any) => res.status(404).json({message: error.message}))));
});


export default router;
