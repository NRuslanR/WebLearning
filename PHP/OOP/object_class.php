<?php

  require_once __DIR__ . '\..\output_utils.php';

  class User
  {
    const CONSTANT = 1;

    private $name, $age;
    private static int $counter = 0;

    public function __construct($name = '', $age = 0)
    {
      $this->name = $name;
      $this->age = $age;

      ++self::$counter;
    }

    public function __destruct()
    {
      outln('User::__destruct called');
    }

    public static function getCounter()
    {
      return self::$counter;
    }

    public function getName()
    {
      return $this->name;
    }

    public function setName($newName)
    {
      $this->name = $newName;
    }

    public function getAge()
    {
      return $this->age;
    }

    public function setAge(int $newAge)
    {
      $this->age = $newAge;
    }

    public function toString()
    {
      return "{ name: $this->name, age: $this->age }";
    }
  }

  outln('users:');

  $user1 = new User;

  outln($user1->toString());

  $user2 = new User('Ruslan', 25);

  outln($user2->toString());

  class Employee extends User
  {
    private string $personnel_number = '';

    public function __construct($personnel_number, $name, $age)
    {
      parent::__construct($name, $age);

      $this->personnel_number = $personnel_number;
    }

    public function getPersonnelNumber()
    {
      return $this->$personnel_number;
    }

    public function setPersonnelNumber($newPersonnelNumber)
    {
      $this->personnel_number = $newPersonnelNumber;
    }

    public final function toString()
    {
      return "{ user: " . parent::toString() . ", personnel_number: $this->personnel_number }";
    }
  }

  outln('');
  outln('employees:');

  $employee = new Employee('55536', 'Elena Petrova', 31);

  outln($employee->toString());

  $employee->setPersonnelNumber('34555');
  $employee->setAge(30);

  outln($employee->toString());

  outln("count of user instances created: " . User::getCounter());

?>
