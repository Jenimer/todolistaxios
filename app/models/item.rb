class Item < ApplicationRecord
  belongs_to: kid, dependent: :destroy
end
