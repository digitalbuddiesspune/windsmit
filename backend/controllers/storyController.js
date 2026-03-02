import Story from '../models/Story.js'

export async function getAll(req, res) {
  try {
    const { active } = req.query
    const filter = {}

    if (active !== undefined) {
      filter.active = active === 'true'
    }

    const stories = await Story.find(filter).sort({ order: 1, createdAt: -1 })
    res.json(stories)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function create(req, res) {
  try {
    const story = new Story(req.body)
    await story.save()
    res.status(201).json(story)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export async function update(req, res) {
  try {
    const story = await Story.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!story) {
      return res.status(404).json({ error: 'Story not found' })
    }

    res.json(story)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export async function remove(req, res) {
  try {
    const story = await Story.findByIdAndDelete(req.params.id)
    if (!story) {
      return res.status(404).json({ error: 'Story not found' })
    }
    res.json({ message: 'Story deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
