cat > ~/prefer_ipv4.rb <<'EOF'
require "socket"

class Addrinfo
  class << self
    alias_method :original_getaddrinfo, :getaddrinfo

    def getaddrinfo(*args)
      addresses = original_getaddrinfo(*args)

      addresses.sort_by do |address|
        address.ipv4? ? 0 : 1
      end
    end
  end
end
EOF
