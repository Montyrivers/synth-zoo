class AddSynthfilterToPresets < ActiveRecord::Migration[5.2]
  def change
    add_column :presets, :filt_attack, :string
    add_column :presets, :filt_decay, :string
    add_column :presets, :filt_sustain, :string
    add_column :presets, :filt_release, :string
    add_column :presets, :synth_filter_rolloff, :string
    add_column :presets, :synth_filter_exponent, :string
    add_column :presets, :synth_filter_q, :string
  end
end
