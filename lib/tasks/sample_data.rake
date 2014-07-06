namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    #create some new users first one is admin
    #add roles "admin" and "user" to roles table
    Role.create!(name: "admin")
    Role.create!(name: "user")

    User.create!(name: "Andy Reid",
                 email: "andyreid51@gmail.com",
                 password: "seed1974",
                 password_confirmation: "seed1974",
                 role_id: 1,
                 job_title: "Administrator")
    99.times do |n|
      name  = Faker::Name.name
      email = "example-#{n+1}@railstutorial.org"
      password  = "password"
      User.create!(name: name,
                   email: email,
                   password: password,
                   password_confirmation: password,
                   role_id: 2,
                   job_title: "Storeman")
    end
    


    
  end
end