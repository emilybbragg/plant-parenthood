class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :value, default: 0
      t.timestamps
    end
  end
end