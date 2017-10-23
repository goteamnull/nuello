FactoryGirl.define do
  factory :card do
    title { FFaker::Lorem.unique.words.join(" ") }
  end
end
