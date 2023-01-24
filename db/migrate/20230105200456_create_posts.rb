class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, t.belongs_to :category, index: true, foreign_key: true

    create_table :posts do |t|
      t.string :image
      t.string :caption
      t.belongs_to :user, index: true, foreign_key: true
      t.timestamps
    end
  end
end
