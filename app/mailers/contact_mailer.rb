class ContactMailer < ActionMailer::Base
  default from: "andyreid51@gmail.com"

  def confirm_email(contact)
	@contact = contact
	mail(to: @contact.email, subject: 'Container devanned')
  end
end
