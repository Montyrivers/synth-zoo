class ChangeFilterFrequencyToBeStringInPresets < ActiveRecord::Migration[5.2]
  def change
    change_column :presets, :filter_frequency, :string
  end
end
