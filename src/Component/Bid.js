import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`);

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft('ENDED');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="bg-black text-white py-2 px-4 rounded-lg text-center font-medium">
      {timeLeft}
    </div>
  );
};

const ActiveBids = () => {
  const bidData = {
    title: "Felly - Sweet Unknown",
    artist: "Departed",
    currentBid: "0.0005 ETH",
    yourBid: "0.00055 ETH",
    volume: "12 ETH",
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFRUXFxgaFxgVFxgYHxoXGhcYGBoXHh4YHSggHR0lGxgYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lIB8vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABIEAACAQIEAwUFBQQIBAUFAAABAgMAEQQFEiEGMUETIlFhcQcygZGxFEJSocEjYnLRFSRjgqKy4fAzc5LxFjRDU7MlRMLS4v/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgEEAQIGAwADAAAAAAAAAQIRAwQSITFBIlEFEzJCYYFxodEUwfD/2gAMAwEAAhEDEQA/AOSRrXWvYvCBMx66T+lKGM4S+yWGMl0FhqjkhQzRsttr20sCfEBh6U5eyaaNJiBLGwINiDbpyIYAg/Ct10zFvkm9s+GBkRv3P1NcidN67L7ZHAMfmv6muQPzp+ELyzbBw3YetfQfszhC4MAfjP6VwXLx3h619Aezz/yo/iP0FEvpGvqOM8a4MLiJLD7x+tLQi3p448j/AKxJ/EaUlXeqaJix+9keGAxIbyP0o77YcMG7NrbhT9aHeysftx6H6Uwe1JLqnofrS+5B9rOINBvTr7NsIPtUbW5MKALgXYnSjNbc6VJsPE25Cnf2aYMtKGUXCEarfd9fCnVCuxo9qGC7SKPa9i36VypchYnZa+gcfl6TWD3IHhUIy7DRDUURQOrf61EZpKi5Qd2I/s4yQxS6yvQ7+ooxxjwm2LlDKB7oFyQKu4vjDDoeziBlfosY/wB7edCcbxk4/Cv7qWNvVjcf9N/Wn6m7SF6UqbB+H9li/fkUegJ+tqaMCMNgYDC0y23v47i3IX8KTMz4jnZNc0wgiPIsSuoeQF2f6eYpEzPi+MEiGMyn8c5IHwjQg/Nj6UNe7En7IJ51lmV6jpkxjH9xIQP8RvW/CmJwWExMcyfaSFJuJBF1BG2kjxpXy2XG4+dcPDbUx5Iqxqq9XYoLhR1Juem5IFfQvD/DmHw+ETCkJINNpC4B7Rj7zG/O5vbwFh0pOSKUWcm9p2awY6ZJImI0xhe8vM6mPQnbelDKsvPapupGodfPzph9rfCsOAmjOHdtMoYmNmvoItbSeek3PO52O/ghx4p15E0Wgpn0L7T4dWWJYXAMZ23tZDvtXDMLAC49aZeGPapi8IgiZUnjHJXuCPIMOnkQapY/iHCzTmVcP2IYglQb2PWxAG1/KiNA7Ow8QwD+hdNtuzj/AMwNcQwmFBkA866vjuLMNiMu+zxSDtCqqA23Ig8/QUgw5VNE6PJGyqx7rW7p36EbfCqiiWzq3GOHBygJbbTF+Vq5HwxgQcVFt99frXZuLR/9NH8Mf0rmPCkf9aj/AIh9aIdBJjr7ZMOGgh8mb6LQD2PYMLiWa33G/Smr2preKP1b9KFeyuO0rH90/UUkvQNv10LntSwYbHyNbnp/ygU8cOYYLkzrbYxy/mDS17Q474x/h9BTllSWyph/ZvTf0r9CT5f7Oa+zzAAZhEbcmP0NGfbFhQ+IiP8AZgf4mr3gOH+uKfM/Q0Q9pyXnT+AfU069Qr9NhDCYYDImS2xib83pf9jmDCzytb/07f4lpuKWygj+z/8AzoN7LIrPKf3f1FT4ZV8oXHwYOfFrf/c3+RrsMj2Nq5lhY75yT/bN9TXQcZLZyPT6ClNdDizkGacQYvCwiHHYbCSxEm3Yy95CfAaiB6W00k4rHRE64kkha+xB2/7+m3lXXcHwqkK9uqw6iB3SqixsLkHULb33HSh+d8I4ac67yFuXcIdTY8/2hY7/AAqq9ibRy189kbaVjIB4nf8AParOEwyTbRSDV+Ftj/r8L0Vx3ApDmzaVJO9rBbn924tUWU8GS9v2R0lWDLrMRk9CliO91BOm1LldjuPgyDJp0IJjJHiu/wCXOu2+zl74X0Y/Sl3IuEUwyqZWmdlOpVkfU/xSNtCjb7zP8KuYPM3ZyFvFuxGkix8jp5+RAvTfK4FdO2JHHrj7RIP3jSrFATuB1tT9jMminku8ssbFrsTpe1z1WQG9GI8vmwxCiDDTKfckTCjveBOlyD/hpsSBXs4vHiBqVrDY2Um23kK6FmOEgxUgR7nSPdLaL335e8fyoPHmWKVNYYPplCOiIsXI99EUtswHMlm9B0pY7H4TcviWjYjUBJGTceKlbqw81J5VL5dj6VG+d4OKN3jh04dUCrqUG7O97g/jXSNw1xYUt5bmkuCnOpUF7X0Kiq69CNCgW9KlzjimOONUieSViQQJVVg3PZI2uVB27xI5bXpdx+IxuktiYgkZBaOMrax5jSefO23I3ql7C/J0Kfjh2VlRo4mFt5A3eDC406QfzFAs4xQSz46d2B5CPVp52szsO5v+78RQfNcuYyRKtwzSdjtyBVYhsP79+fhTdx1kOHxK4fCIWT9p2YKLexCNa9+lxufA+NLhdBy+xZx2cosfd0RxHonJvC53Zz6k0oYvi1lY9iFvyDMA1j4gHuk+oI9eYacX7H8UqaY5Ym3vuzD4Wtal/M/ZzmSAXw5dVWwMWl9tTN903O7HpScvYpQXkUsbjJJWLyuzuebOxY/M0R4eyOTFt2UIBe3MmwXvICzHoACT8KqyZXJG4WZHQXGoFSrW62D2F7eNdT9nfGmDgX7I8LRRXbRM2lmYMWNpdA2ILWBFxbwtUFgXI8ZhsHCUQ63axdtaoWYchsG2HQed+ZN7sGeRS3uDH4kuGt/hH0pYxXDazYhocukfErrk0m1gsa6QrMxsLFtY1bA6VI52ok3srx2m4kgZvwiR/qUtf41W+hfL3cjs3FOXHDphJZwQU757ISd8m5UhkIIHK48q5zxzleXpokwM4YFrOm4tsxuEfvLa1juRuLW5Uu5rlsuGkMU8bxuN7MOY8QQbMPMXFUWJPOpse2icqgHMk1DavUWnjg72dYrFsrPG0UFwWkcaSVvvoB3Jt15edACrPgJoUilkRlSZS0THkwBsSLefj4imLhnjafCqYZFE+HbcxydP3kb7p+Y2+NdN9s2WxJlSKiACGSIR/uixUj4rXHsjyWXFAhGQdn+NrX2ZrDx9001yD/J1tOMcLmOHGEWQYeQ6Qva+6SOS3Hj/AL8KF5PkU+GxkazIV7wseatvzB5H61V4r4IiXKcPjMPFpkWONp7H3kZLsxB6hiOXS9U+C/aBNBogxSmeDbTq3dLcipPMDwPwIqk/YhxOg+07/hx+rfpVD2Yr+0f+E/UVe48VsRhop4AXjsWJHMBrEEjn6+FVfZkvef8Ah/UU/sE/rBPHS3xb+o+gpwwYtlh/5bfWlHjX/wA2/rTjGLZaf+X+tEukKPbFPgRP62Pj9DVr2iC+IX+Ff1qPgRf6z8G+hqbj7/zI/hWq+8X2BvFC2V/3B/mFC/Zmm8voPrRbMhbLf7i/5hVD2bLtL8Pqaj7WV9yBGVrfNif7R/qaZ84ntMw/h/yilzIRfM2P7z/rRHiWe2JkH8P+RaJdhHr9lL/wa0rCRcXPZNPZFOyI0glrHu77ki/hah2ecOjDK0oxOhhu4MoO5P4SB1PSuQZfxJjIQVhxMqA7EKx/X1qjKXkYu5Z2PNmJJPqTS3lbDsmX8TRR27aaKX0kA/LesOcxYl7QWW2/7M3NvEgC7W8hXFmS21YrFSCCQRyINrfEU94vlnb8XnEMK9lLK+IeUgssT9mqKB7zuwAvb7ppfw/G0OHUxxNKTqDGVbXuPwBjYC23LfrXMmlJ5kmtb0t41A6Vm/HXbHUJZLi1g6IwPnvsPgKmw3tLxCIV7RZBa2l0A28imkj51zDVXuqjcG0e8g4hhaPExYhijk9tA66j+25Op8NQ0m/iCap4fFxWcyL2j/duSNLFr6rD3gfDzpPD2N96Y5oowIpI5RIsi98EaWjcW1Iw9TcEcxTjIHEsNFIJO1JCu37RWewuL2AW/mLW8B4UxZfxGuJaKGcEWkU91u4Wva+k7D4ULx2HiIg1ERPIlydJffVoBO+19Nz4b0LxpvKSqaDZFdQAB2ioqyEAcgXDH407JqzqWUzoZlaRQU/Z4hHvazhAjL4G72B8Coqhmmbk4uMRlg0cbyEn7rMyoPmNRF/Ck7C5xMqJDqvH2gax3sV3OnwubE+gqPE8T9nipJXj7YsqA3cryu25Xcnv25jlQ2kCi2Ph4hxf/vv+X8qhkz3F/wDvN8NvpS3D7S1Xll8Hx1N9Wq9D7TMMffwKD0X/APujfEPlyNMxkll3kZn/AIiT9aC5llRKBgotyJA5Hzty50zjj7LjucOAf4JP0JFWoeP8D0TDf3oZR8+5Q5JgoyRLw1lyQ4AQJYSTKXkY3Peb3RYEEhVKi17Xv4mm7B4oE9K52c4LgrFOia+27JUj1H7QgSRBcg6YijhTsOZHXZlXEBNJZ7eYB3PWw/SvLc25Ns9WEE1SGHP+H4MbF2U63AN1YbMp8VPS/IjrQTB8J5G66VSPVyKvKytcbW7zUTy3OUkF45VcA2O9rHwPhQPFqGdr5ehJYm93BNze+x5mu3C9xx6iOx8g/DYjKsFKzQYQtIDt2oRwpHVWuSPUUUxftSfQRHhh2nQlyQPO2kE1CuVB1sMuAP4hKy/U0Nm4PxH7iD96Va32x8nNuZBxNxcuNy9MJMrxza0LvYMpsTdhY3PPlYUp4XC4eFbB5JDqv3bID3SLdT1o5ieE5N/2kNx/aigXEOElgKKIVto3dGLhzc7m3um1hbyopILsa8142llwy4WMBIuyEbXAZmGnSRc8tvKlzKMuV5AqlVP4nawFvOtsHg+0RHjViGA1be7JfSV9L2sfOmfKMmxuAlMyxg921yuoWNieXI7W+dVSQmx64PwTwiwdZlNu8HNgPw25eNHsFlEcUjSRrp1DvKOV78x4Uiz8VKSH+yhZOrLIVufgPrVY8e4lTsq28Dc/nUOEmOM4oucVZHiHxDyJESpbYgjl86Yp1K5aQdiE3/6qVU9pMwPejjt/e/nTDLxGs8CvHGskTELKpO8bEj3h+Hzoe7iwW3mgHwAb4j4H6Vvx2f618F+gpqynBYdJm7KIIyMykgnewBO3xpL45n/rpXwC/wCUU07nYmqgNOc7ZcP4U+tVPZwO7J6r+tWuITbLx6JVf2cf8OQ+Y/Wl9rK+9AjhcXzFj5v+tRcYTWxko/g/+Nam4O3x7H+OhXG81sbN/c/+NKp/V+iV9P7OIobDbnVmDByyEWU7mwvsPzqPCc9hc1NNO2rn1uADyNZI1JTkkxNlAY9Qpvb1qpLgpFNipv5b/Spe1cCwZhfnYnf1pv4Y4Yvh2x+L1jDILhFvqkt1v0W/X9KdJiuhEtWA0d4kz1MSQEw8UKKe7oWzW82+9Q7FZa6b2uCAbjwPj4cj8jSodlUVjLWtehqQzCK3hlK8qjNZQAXxWcmURhxuq6dXjd2a/wDi/KmLKZ4ZjPNO4jGlm1b7PqQnYcyRq26k0jqal0W6VSkTQbx+aGVw9tKKNMa2Aso8dOxY8yepNUpYd9yCT4VSEpHI1ZXE6ufSpZrGkzwxVtFh7m1SYdS7BVFyad8o4Yi0Xl16j6BfyN/mRWGTLGHZ2YdNPNzFcCzDlIIG/MeBNb4jLoozZ30nwIsfkTenzL8LHE4jMSjV7slywJt7u/ut9aWPaBkh0JikHukxz2/EWLJJ/e1WJ/hFTj1MZypIefQzxQ3NnvDeeHsZI0Bte5CrdmCgEHu7k6VsfJfKmzLcwCMYplvY8uZBHh41yLL52SQFTa+x9DseXka6BlGIeMIyx6XA7v4bL3SAQCNiCLEbW5Vllx7JWvJvppfMjt8oaMZleHfCyPDFYuRfT58ybeRPzoZgeGJOzMkRJA5hZGuPgCKP8MYvs5LNGipNzKjZmubm9t9yw/QVZxSnCYkFPcbp5HmK7sEaieVqptzf4BuCyucx6452YD3l1MWX4NzojFloKh2YSx9ToUMp8xareZr2Ei4iL3H94dN6mxLiIriI/wDhyW1r69a2s5qN8BlUYNtMe4uGCjcdDv8AnW0+UOm64eGQ+IUD8q3QBSUHIWZf4XuLfOr2FxrCxNyCPr/KpbZSoWcaC6MGCq1gGAFuUinkfL6U3YbM49XZX729vAi5tvWuIwUEx1dT4UOi4bP4+pI8dyTSbT7GlJPgOHDp1Rf+kUPzHh/DSqdUar+8osR514MqlHKdrfH+dbSZWCO/M5Ft99qlfyU+fBzl8jBZgCNIvdjyt40Nk4mwmEZljuSRpfmSw6gjl8Kucd5vZhhcMbA826npf6gehNV8v4LRETtQoaQ2VWDMzEi9tK7+e9bXZjVBrhj2hYeSVQTYnxFidtPx2t8q847wH9bSdGGiVQQd+a7H8rUgcZ8JthiZIwV07sAb2t95T5dR0p84YxRxuWKL3lS9r22Yfzt+dZTmsa3M0UdypDZxSv8A9PUAjlH/AJTUXs6QiF7294cvQ1Fw9nQxOHEbgao+64PlsDb0qtkWYfZcTJhmHdk70Z5eO31+VYf8mFyh7cl7HakVeBYz9scm3JutAuOI2OOnIta69R+BRTHi8UMHi459I7OS6PbaxPI/78KL4rCxyOZCqktvyvWeT4hihFTfkccMn6fY+YojYg16h3rVTWy/SuoBg4OyYYvEhHuIlBeVvBFtcfHlTthfaZCZXidQMLq7NFC/+kAQXJ87ABbdaUuGM3fDxqY7aZJ0WW4vdNS7eXWmHinJcvjhXVE8DagGZQQdWphfQ3NbLe453uKtLgzb5AfGXCpwrGWCLtMM41I+7aQw1WIHIKB7x23Fb5A0WLgGBKftgWeCY3vqIDGE+ultLdATtV/LZnjBwUkva4eSz4WZRrAfUNKEb7E2UofoaUMZgMTh5CXjeMrIOhUax3l5ctiCPI7UnwNcjBjsjghwUU0yFpu20yAvoLIdQsDfuujAAizcr3saUZMIy3uDYdbG3rfw3HzFdFz3ELjsJBK7CFe3CYl9BcxSBSgfSpub7A9d18KW+JMHHC5WGVpkS8cgcMrK62JbSRZUbkou3uG/Sk0hpsWHQjmP9a1AqdZt/dAU27u9vUcyD1+PhtUrYcDqQpubnfkPLnvYX870hlUURwOHDK15NIFibqT1C9PAMaoRRFmCqCzE2AAuST0sKauFsI6mRPxoUcdLFlNvmopxVibpAOPDqSQT12IqLFYcxtTFmmTCJGYeI+XKhc0etLdV+nhRJV2OLvoY+BcvVhrBuzGx/dA5L+vy8K6bFhlC2I2t1rjvBnEowTya07RJFsQOauLlWF/Wx/2C+ZhxQrYZZIz7xtbqD1U/UGvM1GJqW7uz3tFnWSKxLiv7/ISXCq4dDuv5g8wQfEHr4itMtkB7SOUBiBokBAtIhvpax2J8vWgmR5idW7AXB2YN89qt4kaXMglVeV7K1cidOz1Z4ruEvIKfhPCLiAwe0Qs5XVfk19FiC+5ttejJwwigmsLFu1bT1UPIzBPUB97dQaEw48STmRiqlNgwTm34rfjtax/WxqfEY1UVrSMxYWNwosPhvWuTK5KmYYNGscrSDOWZiEhQA73fzHvsf1ojic0XEqus6SL2YC9x4kdBeufR4fEGMyrDMYr+/ofTv4G248xWkGZlGsGsRbY+XkacZZcfKHk02mz8Npv+zq+MYNgxGO84A2F7nfmAd6qDFAYEoxs99lOx5+BpNwXEzC2oBrCwN6K4PiMyssSx6r7kNYgDqd9gK6Ya5riSPMzfBH3BjCubxgrc3skQPwJJ/SpsFiksQr6vX52HkPrehOaZQAvar3RcAr5nw8tuVAu1ZfLzr0YSjNWjwsuOWOW1j1h5WZwEFzYkfAj9QfnWkWdyHtGL+6vlzJCj60nYTOZIGQ3b3gzi9trghfQjc+tVf6WAE4H3yNN+gD6vpV7SLG6fP5Osh/IfSoeIM5GFwhZm78g1WvuF6fPn8KS4c3KMGsGINwCNvjS7xXnDyt3zcsd/5elJ0gSbCuS4kqJsa6GQxKGA5jtHYLEp/dB3Pkpo1wNmJxOGYzSMZ1xSSiS+6ncubjkCisvhuBQPhXP0hMUEoBixBftb8tioi+GpW/6qdcq4etDimW0L45ZG07ERBySkYt1A3PmdqRQsSY6fFz4lApez6gBuLWbSCeW6KwP+lXvZS/ZyYiC/dB1J/CdJH5GiuXL/AEZg4ImT+sYklbgW7xBYk/wqQoHrS1hpThZpJt/2bohA8NbqQf7ij5CufVQeTDKK7ovG9srGTGP9ix6vyin2byb/AL/U1e42wpMa4iP34jqFvw9f9+VT8S4FcVhCV3NtaHztf86h4PzL7ThdEnvLdHB6+fyr535stsc3mPEv4/8AcHXtVuPv0TYxVx2CuvNluPJh/qKX8r41RIlSW4kUaW9QSP0qxwlMcPiZsE3u3LR+h5j/AH51XzrgtJJ5JAxXUb2HoL/nvWsVijJ48v09x/YnbVrvycYtUqSbEHrb8jetL16a+gOcPcNgSR4jDAXd07SH/mR97SPUXHwpl9pvEPbiGCTvaVWTVpsQWSwUeI50iZbi2iljlT3kYMPOx5fEbfGuwcR8P4fH4ZZYkJkUApoIuUbcj+6T18Ktcoh8MQMtyuaIDE4RxOiFXePr3Qrnb12uN+7TRmRw2aYafEQSywYiFA8uGkJZTY8wx72kWPjpNtgOafiUmy3EMqSlZF2OmxBUm/oRUUONMOMGI7UTF/2knZvo1dpdniYjlubEWpDDMc6jBT4aZBh3eASqXYlp5BIJUOk203RgBbnbryoHDmbnCfZAW7N5UIAFhrB7xP4jbRbw3o/kObHFYN8DIO0eNu0w6AKWdVVy0WpjfugAgDfSpA6CqsMJkxeGxGiOKOUuSpuER4BpmZl20kAK2nrt40B0C8Tw8yMRqFgwUHxJ329AD8vOhmMmvZRyW4Hzo/xVjg2LZcPvEhUp4kmOPUzeJuDfzvVTCZcEGuTdui02vYE/cN8KmSGBWCJdy2h7XdLnSbeZFrU4ZcMDhdMU+p5H98pf9lfqbc28ef8AMnwtlkU2HURkdqsEZjDbASEEs23PvfKkqfKMQMR2bxt2hY2FuZOwN/Xe9WvYzZe4kxUGLL/ZkMaabAGwuRtew8RakXLJwrgN0JB/Wn7NMiOBeOMuHLBS1hyJuCvp50jcUYTsZyV91+8P1qJK1ZcXzRDnmC0Pce624o7wbhIcRBPG0ujEJZoQxAEgtum/3r+G+450I7ftkseYH51SRdBB8CDUuKZpCcou0+UMmFmI9fMA/kQRV5sVcclHooX6UPymLUxteRSL2B7w8x4+lTkbEqbgNp8CDzsRzG1eVn08oO/B9ZodfjzpJv1e3+HmENhc9ST/AC/ICr2XYiNpQZypjQg6HeRQ7dB3EfYW3Fhe435iqLChmJxwUW1RnfprJ+NrCnpsanO34J+KZ3hwbY9vj/TqOP4rwsgAmY93kkYYpbpv3Df51DiuLcHMqw/Z2mReSadAHmTq+tcvw+JklIjUhR1OkbDx5XPpemPCroAAv03NrnzNtr+nL5mu3PqI41Xk8PQ/Dp53ufEff/A1j8DhZf8Ah4ZYD5SOfSyghQfgaOcMZIIRfmze8foPQUG4fwDzNdQtgdi5bn6AfmflRTGZ82HmGFkUI5A7wNwFa4DD4g+HKvO9T9Uj25JJfKxvn8s946zgRxrGo3LXLcgNIO3rvypBbPGJ3N7cq6B/Rsbq2Hn72ve55k9HU+IPy9K5RxDl8mFmaGTpurdHQ8mH6joQRXfpctqjw9dp9sty6L8+bljc7nzqpJmJoK09Wsnwb4iZIVNtR7zHkiDdnPkB+dh1rr3Hn7aJ5MafGheJn1N6UzcVdgphhifWVQCRittLXKhB10hQDbz+FL2PwIUlkbUmogX942Au1rWsTe3WhghyyfOMDhYMPL2JmxwGoFr6EUO5HPa9r8gTXa4Z9uyUKGa7rYXGkkn8uV/TxrgfCHD39ISRxl1REjvOxNisayMdh1LBgB4Xv0rtOY54kAiWIMwdU0EWtodiFGrlcgMaBMrZnnOIV0RsJHLE0sixvr7waNGZnII6hH6jkPGhcOQB5MUWUWMx2/h3+pNM8WG1zwsSpSBJQ6hrntpdBv6aC5/vVTyVy0Zkv/xJJHHozkr/AIbVM1Jr0hx5KaYhUAgUEbW5dKs4DKRECY7AnntzqHOc2wmH72IlRD0HNj6KO8flVDhjiz7ZO8cUEixItzJIbG5PdGnewIued9uVc0tLa4aV98FKfuTSQaJdbJdj94UQ+zk76jv6UTOHvz3rU4Xy/Kh6W0uf6DfR8sV7evDXt66Bm6SWNxT57OuN48IZhiASGQaLC+4v3fIG9c/rKaYmrHmCbCYqWSSVNJbeysQBTdh8lylotIGHDMOZYFr+t7g1xitoZSpupsfKq3k7PyN+JyNsNiA+HmCspJVlIYi4IvvexsTUeLgLsWlJOptT26sbBnsfvEDc9TS0uOcG99zWxzBz1otDpj/mGYROoiw2HWHDxm4vYyO1ra3b9Pz6BexM4Y2v86A/bn8TURmPjUt2CR1XJeKBHhootKhlA7494WPKng8UNrmiXSZISAb2DMpANxcgX5/KvnYYtvGriZu5cyM7ajza5uenTyq9yJ2sfsXniuWka7ksSxNr3/39KE5yi4uIFEclfdYKSPS/KqGBz+MIUZQ1+RP6gj9aG4nPJR3EkKx390AfW16bkqFGLshw2EdHILKtjY3NEMYsJX/irq8r1Vy2CJ93uT13pl/8EQzJqglIb8LVyS1MIumepH4bllBTi0KUGNeJtUb2I3BFOQAzWEvDaPMYRqZF2GIjXqOnaAfy5e6Ek4HnsWUggc77Gh32fE4GSOexRkYMjDlcdPQi4I8L1Uc0JcJmWTSZsfqa68hvhvMkZtGI2YXAuLb+fnfpSlDdrAbk2t608e0/LEWWPGw91cSLug+7LYEkeTA39QfGgmSYNVXteZNwPIfzrOUY4LkvJ1YpZNfKGOT+nt/j/QlleDEagcyd2NWJ8aoFuZqCXEBtuVQuoG43rz/qdyPo0ljgo4+kdL4RbSi387/DnS/7TZr4xLdIE/N5DVTAZvoKh3Gg4iaNj4CVLqfS4oPmOYGWKEuf2sK9hKCe9dSSreakFt/51vT20eRikln3vyOOQ5ks8QikYh191uoPQis4kyb7bCYX0riohqibkGHhf8LW+Bt4bpWAxJVtjTVlueanSOU2YH9nJ4H8LfunlWEZOErR259PHJB+zE3AcEzu+mUrFYEsAyOUA/HZwqf3mB2O1GssxOGwKuoJJlWRSWS7DSbxtqF1ZSQO6Nr89t6Y+PcPIIlxca3KECaMi4YHuq7WIJtexPgR4GuYZ1mxnk7R1QNYC0a6RsAPnYeQ8q9fHNSjaPlMuKUJOLLpwiXWSaQkupkkIs1ib6U25s1gTy03phw0jxYSOaJE0NqjbXGjbqT1NzuPHfbwtXP5MS9ue3TyFG8m4oVYxh8TCkkO9io0yBt7PqFi1r2sTyrRSRk4sKxLgpQe2h0N0Mdxv42II+G1S4TLY2kRUx86qmnswd9JFwukM2mw1Hbbma0yvipYwUWCF478po1ZrdAWAB5UKzPGpLKWjQRAgd1SSAQBci+9ibmq4FyOkGX4zDCYR5gVMxvIZcKx1HTpuHQPbbbY2FqDYr+lDaJcRK8YUAGBHQWG1rhFbpQSLMcSljHiplI5WkcfQ1ocVNK37bETv5dq36k/SlwHIy47JYMJhhNJPGZ35rfU9yL2JO9/GulcCZOYcHGVK3lAlY+JcA2+AsPhXCYsLGr303F99Xe9dtgfQ19DcKYxWwkJjDBNHd12DaQSBe23TptyobCgj2D9W+Q/1rU4VvxmphLfrUbavGpHwfJl68rK9Y1JZqa8r2soAysrBWUAeXr0Vlq2WgDaSFl0llI1DUtwRdbkXHiLgi/ka0orjM0edYFfT+wQRxm1u4CWAPibk7+lT53gFSVX27KUBhpNwD95L9Df6inQgHXoNFYsNHJqjXuve8WojvC/uE9G8DUH9Fv3wVKsguytsRdgoIB57kcr0UFlVSKaM34X/YxzQb6luy77edK0sTIdLAgjmDzFFsgz+TDsLMxS+68x8jTVeRO/ANAeMi4K35XHOmnIs7ZCDe3609Tw4DN4Y1VlSRbWKWBHQgqd7Un8U8O/YZWiN3hG6vbx30kjkb1z6jEmuj0vhuqcJ7W6X56HfBY6OZedmI3H86BceYP+pOdNrMh8udv1pTwOaGKRTqupHLwsadeLcarZbJci7qhT960i3t5iuKGLbJM9HUZ7jJR6E3Msx7TAqrG5GgC/QrsT8tqnyiIfZ0J5gE+oudqW5J+4U86JYLEBUSxuLWI8669UnKKOL4S1DI2/b/sKzzRgdfhQPHY++yXFE4MrnlJEduV7dfQHlc0GTAOd+ze3jYn1NudY4IQ7bO3X6jNW2MWv0EcMNSgyCyOlmBJBcqe66bHfzO21WsV2bbhGkYJp7SXdgovy02UWvzNz50GTFWFy2pvO/Lpz+XwqHEYySTu32/CuwPr4/Gu2MYo8OeWcnyy1HmGk9Dbwoy+JDoGWlQQmr2DlKAg3sfrXNlwJ8o9TR/EZJ7J9M6oM2XEYJcO72ecGMkc9IHeb5beppczL2etGrPC3aqqk6bd8kdLDY7dR8qiwsSgQubkFfS1j0NFJONPswAu0jHkCbWHnaubFlnGVR5OvWaTHKG9uvyc+bszuQ3p41s8SbnlYXFrHfbY38r/lRPNZhi5DKqxxSNcsiroDd4DUCTYsdVzyvY1SxGCMRAkUqWFwG2up6+lequVyfNSpPgizHKpYDplVo35lHVgQOh3FiD5E1UDsOlMeYZ1icTHHFNKZVj2jBCkjYC1wNR2HW9B8RYe6b+XW9uVv1p0KyquIPgav4HERghndlN+ilrfvcwD6XvtUGXYbtXAIbmBYaQd+Z7x6DflXR+Hctw0LIwiIYGwd1Ym55WuLX9KcU2KTSI+FOB1ldJ5mb7ON9MkfZNIegsWJCeJNr8uW9dbRlsLculuVvCuZcQyJrXt8YZIpGRvs2gMWU7KY9Nn573F/lTPlcCwQlYO1N7EJJKxUcr7Ncj4UNE2Myzra4qmc2j6TR/8AUv8AOlbL+LYHcxPrjIPdtHIQxJ3Hui2/1NeS4LL7nVHh79booP0o2i3HASK8r0GvKzNjKysrKAMrKysoA9qRbelRVlAEpq1hMcyeDLe5VhdT8KpB69vQAaizPD3u+EU7H3WYd6x07cgL25dKmxXFeJYjSwjCjSoQDYeFyCaAg1sG86dipHs7liWYksTck8yTzNQ1sTWtqRTJIZmRgyEqw5FTYj4imXBcZy2Kz/tAdix3J9RyNK9qymnRLVjccRhMQkaW0Mpe5G17m4t8On8624hcLg4oVOsLKzKb7gFTdSPC9jSdeplxTDrf1rOUE2n7HRDO1BxfNl3B4YSTRx32dlF/U2pxyfhFCzft17pINrc1JF9zSjl2aqkiSMtyjKw/ukHn8KPTHCSBjBLIjnvC6j3za6kje3P5UZMe+NJ0PT6j5M7cbGlZocO4hQ2vuXILsT0CqvLf/tUGLnSO+IkglWMm51AIQTu2x32N+QoBgspxSSao5e9zDobnbcHceNEhwxOV/bvK6uRrAuzWB5gtffc7VjHRR88nXP4tkb9NIE8c/Y9SPBu7i76fdtbY/wAR2+dKomtuBRiHhbEmTRosbEjUdrAEk+W1F8n4Rhkj1TSmMkkXtyAsSfka6MeNxjRwZs0ck3LqxOkxRIqSPFkizG4H/YUX4m4b+yTmFZBOLBlaMc1YXFxvY/Gh4wDkAhaqmZ3Rdiz5hGI2YkJsq28fPwoPNOWYs25NevhZL+43yNTLlkv4bfEVnHEou0joy6rJkioyfCIocUy0Rw2POnSCN+YYah/ivVKfK5096Nh4XFRdky21AgX326da15RzcMN4XNApJVEUkWLJqBKnmNm7t/K16lxRg0AQIAbbk9PEXNVsswcMoP7REaxt2yuFJ6DWH0j/AF5Ux4fJALFGCqRbURDKpa3IOJwAPDUBVIhg7heDDoyyTOQW1Kt10pquNtZJ+emwvTPM+HldIUJiZSSspIZdYCjSraQGuH336+dL8mQvFvLJIFLWI7CP7x3t2UxY7dQD5UbfJsAoVnxpYKLJHpke3XYED4017A15GOTAKoEImjDrZo0tE5Rb/duS9uguxtyo5goZFhCGUsebO6DURubAAgL8ulJ+UZfDGQ6QoDz5aSP9abvs8pCvYqOZsAbi2wuRTaIssCIdL39KoyYVSSSIyet1BP0q6pdO6FI1dCPpcfStND/+2/yP8qBHzVXle15WJ0HtYRXlZQBlZWVlAGV5WVl6APayvK9oAysr21ejzoA9C1hNbx2qdB16UwKxU1rarjxnwq1hMXAqhZMIshHNu2mQnz2Yr8gKTBAgV7prcLyFboo6m3wv+tA1RDat0B6VuV3sN/Dai+UcPYicM0UbNp27qs255Dug2pXRSg30iPLczxKG8bnu+d9ufKm3C8f4xz3ViubKL3UFvUmkSfUpKsCrA2IPMEVsdZ5sSDufPxppsTjBroZs1z3Gs7M8saMLghCCRcWI2JPLrQ/BMzau0dr/AHVCk6ifTYD/AHvVXDIotYCj+X4x0B09kQd+/GG+F77VavyRKvCK8GFINgtvXarH2cjqp+O9U5MydpCmqHUSbdwrp62G9FcxwPaxLH3O7c3AsdTWuS3M8qv+DP8Ak0bCWQsVJ2v3VubeHnUOCi1/+lIg6Fxa5NV8vwuKjYDtO4PO+3xo7DizIWEkegIe6xN79L+R/nQglS6dmvYsF06+6fuk3F/Q8vhQzNEiUWdGItuVF6zH8OzSsXWUsp6Wvb4DlVzJcsMKvZizMB745Wv/ADp8klXIsHC8bJEWNnVyW1AhQPcAO1ibk8/hRd8ljdCrIN+ewv8AOo4c4iuVKlSPesvLz26UUSRWHdIIppIltgRuEoAtghU9GB3BHK3Oqv8A4cd2Has0y321SMpUdeQNz/KmlTYc6A5nxHLFMI4YtTC5bUDZtgdrfGhpDTbIs1w7YdHdWnEYAACzFrkkX2dSRbyNNHBmOmZYxgcaWjUWaKXS1uQA763G5GwI2O1DMozgYhP2qRo5fR2ZbvkBdWsKR7nMX8aN5HEuFkaSBVUuLMCoIYA3F/8ASlV9Duux5bAvIpbE6EI31Lb89+XxquMvU7jHG3lIf/3ofLn4a3bYaFwCN73t4kAqeXO16Jx8ZYAAAThQNraJBb4aKze5Gi2s+WL1sUNgbbG9j4251lZUlmlZasrKQHtqzSa9rKAM7OstWVlAHthUsMpQNpNtQ0nlutwbflWVlAG0SXIAG5rxYrqWuNiBa++/W3hWVlMRghFeyk2sNhXtZQBqsr+NbaCa9rKBkZWvQle1lIZ72fhtVmLNJ1jaBZ5FjZizIrFQWICkm3PYAW5bVlZRSBybK4i2rwKw5XNZWUl2W16bL+FyvEuO6hpmyvhzEFe8AvS361lZW6ijlc2e4bIEGJGtgGWx362NMOOys6rxWt97+YrKymJs8TKz16eG1by5Y4VmETaRYFtiBf8AOsrKLF2LOOnHaFU1BybWG1/KpEzORezSSEr93qLj8R86ysoHQTmwsL+8L1oZ4YyADY+FZWVRITwmBmnRnwya9PMkgDzFyedulCngxLupVo4j7p7XcDzuKysqbux1R6uSPh5Bip543B7gMe6k8hyFGPtNhtdj0VRcsfAAczWVlCfANcizPxroZkkgdGHRwVI8Lgi4qnh+LhpHaX1b3sNue35WrKys97NVBH//2Q==",
    isVerified: true
  };

  // Set end time to 2 hours from now for demo
  const auctionEndTime = new Date().getTime() + (2 * 60 * 60 * 1000);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-medium mb-6">Active Bids</h2>
      
      <div className="max-w-sm">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <img
              src={bidData.imageUrl}
              alt={bidData.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium">{bidData.title}</h3>
              {bidData.isVerified && (
                <span className="text-blue-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </span>
              )}
            </div>
            <p className="text-gray-500 text-sm mb-4">{bidData.artist}</p>

            {/* Bid Info */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current Bid</span>
                <span className="font-medium">{bidData.currentBid}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Your Bid</span>
                <span className="font-medium">{bidData.yourBid}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Volume</span>
                <span className="font-medium">{bidData.volume}</span>
              </div>
            </div>

            {/* Auction Timer */}
            <div className="text-center text-sm text-gray-500 mb-2">
              Auction ending in
            </div>
            <CountdownTimer endTime={auctionEndTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBids;