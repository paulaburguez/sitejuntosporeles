package br.com.juntosPorEles.backend.util;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class GeradorTabela {

	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("juntos-por-eles");
		emf.close();
	}

}
