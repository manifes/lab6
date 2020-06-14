<?php

/**
 * Class to handle all db operations
 * This class will have CRUD methods for database tables
 *
 * @author Ravi Tamada
 * @link URL Tutorial link
 */
class DbHandler {

    private $conn;

    function __construct() {
        require_once dirname(__FILE__) . '/DbConnect.php';
        // opening db connection
        $db = new DbConnect();
        $this->conn = $db->connect();
    }

    /* ------------- `medicine` table method ------------------ */

    public function getMedicineListById($medicine_id) {
        $stmt = $this->conn->prepare("SELECT * FROM medicine WHERE id = ?");
        $stmt->bind_param("i", $medicine_id);
        if ($stmt->execute()) {
            $medicine = $stmt->get_result()->fetch_assoc();
            $stmt->close();
            return $medicine;
        } else {
            return NULL;
        }
    }

    public function getMedicineList() {
        $stmt = $this->conn->prepare("SELECT * FROM medicine");
        $stmt->execute();
        $medicine_list = $stmt->get_result();
        $stmt->close();
        return $medicine_list;
    }

}

?>
