import Settings from '../models/Settings.js'

export async function getByKey(req, res) {
  try {
    const setting = await Settings.findOne({ key: req.params.key })
    if (!setting) {
      if (req.params.key === 'showStories') {
        return res.json({ key: 'showStories', value: true })
      }
      return res.status(404).json({ error: 'Setting not found' })
    }
    res.json(setting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function update(req, res) {
  try {
    const { value } = req.body
    const setting = await Settings.findOneAndUpdate(
      { key: req.params.key },
      { value },
      { new: true, upsert: true }
    )
    res.json(setting)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
