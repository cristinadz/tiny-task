class CreateFavoritedActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :favorited_activities do |t|
      t.references :user, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true
      t.boolean :completed

      t.timestamps
    end
  end
end
