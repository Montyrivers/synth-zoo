class AddSynthparamsToPresets < ActiveRecord::Migration[5.2]
  def change
    add_column :presets, :synth_filter_frequency, :string
    add_column :presets, :synth_filter_base_frequency, :string
  end
end
